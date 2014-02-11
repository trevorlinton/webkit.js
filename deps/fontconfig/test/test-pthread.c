/* Code originally from Raimund Steger. */

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>
#include <fontconfig/fontconfig.h>

#define NTHR 100
#define NTEST 100

#ifdef TARGET_EMSCRIPTEN
#error "main defined on JS build, this file should not have been linked or compiled."
#endif

struct thr_arg_s
{
	int thr_num;
};

static void test_match(int thr_num,int test_num)
{
	FcPattern *pat;
	FcPattern *match;
	FcResult  result;

	FcInit();

	pat = FcNameParse((const FcChar8 *)"New Century Schoolbook");
		
	FcConfigSubstitute(0,pat,FcMatchPattern);
	FcDefaultSubstitute(pat);
	
	match = FcFontMatch(0,pat,&result);
		
	FcPatternDestroy(pat);
	FcPatternDestroy(match);
}

static void *run_test_in_thread(void *arg)
{
	struct thr_arg_s *thr_arg=(struct thr_arg_s *)arg;
	int thread_num = thr_arg->thr_num;
	int i=0;

	for(;i<NTEST;i++) test_match(thread_num,i);

	printf("Thread %d: done\n",thread_num);

	return NULL;
}

int main(int argc,char **argv)
{
	pthread_t threads[NTHR];
	int i, j;

	printf("Creating %d threads\n",NTHR);

	for(i = 0;i<NTHR;i++)
	{
		struct thr_arg_s thr_arg;
		int result;
		thr_arg.thr_num=i;
		result = pthread_create(&threads[i],NULL,run_test_in_thread,
					(void *)&thr_arg);
		if(result!=0)
		{
			fprintf(stderr,"Cannot create thread %d\n",i);
			break;
		}
	}

	for(j=0;j<i;j++)
	{
		pthread_join(threads[j],NULL);
		printf("Joined thread %d\n",j);
	}

	FcFini();

	return 0;
}
