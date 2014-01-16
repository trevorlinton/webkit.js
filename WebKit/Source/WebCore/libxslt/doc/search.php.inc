<?php
    $query = $HTTP_GET_VARS[ "query" ];
    $scope = $HTTP_GET_VARS[ "scope" ];
    // We handle only the first argument so far
    $query = $_GET['query'];
    $query = ltrim ($query);
    if (! $query) {
        echo "<h1 align='center'>Search the documentation on XMLSoft.org</h1>";
    }
    if ($scope == NULL)
        $scope = "any";
    $scope = ltrim ($scope);
    if ($scope == "")
        $scope = "any";

?>
<p> The search service indexes the libxml2 and libxslt APIs and documentation as well as the xml@gnome.org and xslt@gnome.org mailing-list archives. To use it simply provide a set of keywords:
<p>
<form action="<?php echo "$PHP_SELF", "?query=", rawurlencode($query) ?>"
      enctype="application/x-www-form-urlencoded" method="GET">
  <input name="query" type="TEXT" size="50" value="<?php echo $query?>">
  <select name="scope">
    <option value="any">Search All</option>
    <option value="XML" <?php if ($scope == 'XML') print "selected"?>>XML resources</option>
    <option value="XSLT" <?php if ($scope == 'XSLT') print "selected"?>>XSLT resources</option>
    <option value="API" <?php if ($scope == 'API') print "selected"?>>Only the APIs</option>
    <option value="XMLAPI" <?php if ($scope == 'XMLAPI') print "selected"?>>Only the XML API</option>
    <option value="XSLTAPI" <?php if ($scope == 'XSLTAPI') print "selected"?>>Only the XSLT API</option>
    <option value="DOCS" <?php if ($scope == 'DOCS') print "selected"?>>Only the Documentation</option>
    <option value="XMLDOC" <?php if ($scope == 'XMLDOC') print "selected"?>>Only the XML Documentation</option>
    <option value="XSLTDOC" <?php if ($scope == 'XSLTDOC') print "selected"?>>Only the XSLT Documentation</option>
    <option value="LISTS" <?php if ($scope == 'LISTS') print "selected"?>>Only the lists archives</option>
    <option value="XMLLIST" <?php if ($scope == 'XMLLIST') print "selected"?>>Only the XML list archive</option>
    <option value="XSLTLIST" <?php if ($scope == 'XSLTLIST') print "selected"?>>Only the XSLT list archive</option>
  </select>
  <input name=submit type=submit value="Search ...">
</form>
<?php
    function logQueryWord($word) {
        $result = mysql_query ("SELECT ID,Count FROM Queries WHERE Value='$word'");
	if ($result) {
	    $i = mysql_num_rows($result);
	    if ($i == 0) {
	        mysql_free_result($result);
		mysql_query ("INSERT INTO Queries (Value,Count) VALUES ('$word',1)");
	    } else {
	        $id = mysql_result($result, 0, 0);
		$count = mysql_result($result, 0, 1);
		$count ++;
		mysql_query ("UPDATE Queries SET Count=$count WHERE ID=$id");
	    }
	} else {
	    mysql_query ("INSERT INTO Queries (Value,Count) VALUES ('$word',1)");
	}
    }
    function queryWord($word) {
        $result = NULL;
	$j = 0;
        if ($word) {
	    $result = mysql_query ("SELECT words.relevance, symbols.name, symbols.type, symbols.module, symbols.descr FROM words, symbols WHERE LCASE(words.name) LIKE LCASE('$word') and words.symbol = symbols.name ORDER BY words.relevance DESC LIMIT 75");
	    if ($result) {
		$j = mysql_num_rows($result);
		if ($j == 0) 
		    mysql_free_result($result);
	    }
	    logQueryWord($word);
	}
	return array($result, $j);
    }
    function queryHTMLWord($word) {
        $result = NULL;
	$j = 0;
        if ($word) {
	    $result = mysql_query ("SELECT relevance, name, id, resource, section FROM wordsHTML WHERE LCASE(name) LIKE LCASE('$word') ORDER BY relevance DESC LIMIT 75");
	    if ($result) {
		$j = mysql_num_rows($result);
		if ($j == 0) 
		    mysql_free_result($result);
	    }
	    logQueryWord($word);
	}
	return array($result, $j);
    }
    function queryArchiveWord($word) {
        $result = NULL;
	$j = 0;
        if ($word) {
	    $result = mysql_query ("SELECT wordsArchive.relevance, wordsArchive.name, 'xml-list', archives.resource, archives.title FROM wordsArchive, archives WHERE LCASE(wordsArchive.name) LIKE LCASE('$word') and wordsArchive.ID = archives.ID ORDER BY relevance DESC LIMIT 75");
	    if ($result) {
		$j = mysql_num_rows($result);
		if ($j == 0) 
		    mysql_free_result($result);
	    }
	    logQueryWord($word);
	}
	return array($result, $j);
    }
    function XSLTqueryWord($word) {
        $result = NULL;
	$j = 0;
        if ($word) {
	    $result = mysql_query ("SELECT XSLTwords.relevance, XSLTsymbols.name, XSLTsymbols.type, XSLTsymbols.module, XSLTsymbols.descr FROM XSLTwords, XSLTsymbols WHERE LCASE(XSLTwords.name) LIKE LCASE('$word') and XSLTwords.symbol = XSLTsymbols.name ORDER BY XSLTwords.relevance DESC LIMIT 75");
	    if ($result) {
		$j = mysql_num_rows($result);
		if ($j == 0) 
		    mysql_free_result($result);
	    }
	    logQueryWord($word);
	}
	return array($result, $j);
    }
    function XSLTqueryHTMLWord($word) {
        $result = NULL;
	$j = 0;
        if ($word) {
	    $result = mysql_query ("SELECT relevance, name, id, resource, section FROM XSLTwordsHTML WHERE LCASE(name) LIKE LCASE('$word') ORDER BY relevance DESC LIMIT 75");
	    if ($result) {
		$j = mysql_num_rows($result);
		if ($j == 0) 
		    mysql_free_result($result);
	    }
	    logQueryWord($word);
	}
	return array($result, $j);
    }
    function XSLTqueryArchiveWord($word) {
        $result = NULL;
	$j = 0;
        if ($word) {
	    $result = mysql_query ("SELECT XSLTwordsArchive.relevance, XSLTwordsArchive.name, 'xslt-list', archives.resource, archives.title FROM XSLTwordsArchive, archives WHERE LCASE(XSLTwordsArchive.name) LIKE LCASE('$word') and XSLTwordsArchive.ID = archives.ID ORDER BY relevance DESC LIMIT 75");
	    if ($result) {
		$j = mysql_num_rows($result);
		if ($j == 0) 
		    mysql_free_result($result);
	    }
	    logQueryWord($word);
	}
	return array($result, $j);
    }
    function resSort ($a, $b) {
	list($ra,$ta,$ma,$na,$da) = $a;
	list($rb,$tb,$mb,$nb,$db) = $b;
	if ($ra == $rb) return 0;
	return ($ra > $rb) ? -1 : 1;
    }
    if (($query) && (strlen($query) <= 50)) {
	$link = mysql_connect ("localhost", "nobody");
	if (!$link) {
	    echo "<p> Could not connect to the database: ", mysql_error();
	} else {
	    mysql_select_db("xmlsoft", $link);
	    $list = explode (" ", $query);
	    $results = array();
	    $number = 0;
	    for ($number = 0;$number < count($list);$number++) {

		$word = $list[$number];
		if (($scope == 'any') || ($scope == 'XML') ||
		    ($scope == 'API') || ($scope == 'XMLAPI')) {
		    list($result, $j) = queryWord($word);
		    if ($j > 0) {
			for ($i = 0; $i < $j; $i++) {
			    $relevance = mysql_result($result, $i, 0);
			    $name = mysql_result($result, $i, 1);
			    $type = mysql_result($result, $i, 2);
			    $module = mysql_result($result, $i, 3);
			    $desc = mysql_result($result, $i, 4);
			    if (array_key_exists($name, $results)) {
				list($r,$t,$m,$d,$w,$u) = $results[$name];
				$results[$name] = array(($r + $relevance) * 2,
							$t,$m,$d,$w,$u);
			    } else {
				$id = strtoupper($name);
//				$m = strtolower($module);
				$m = $module;
				$url = "../html/libxml-$m.html#$id";
				$results[$name] = array($relevance,$type,
						$module, $desc, $name, $url);
			    }
			}
			mysql_free_result($result);
		    }
		}
		if (($scope == 'any') || ($scope == 'XSLT') ||
		    ($scope == 'API') || ($scope == 'XSLTAPI')) {
		    list($result, $j) = XSLTqueryWord($word);
		    if ($j > 0) {
			for ($i = 0; $i < $j; $i++) {
			    $relevance = mysql_result($result, $i, 0);
			    $name = mysql_result($result, $i, 1);
			    $type = mysql_result($result, $i, 2);
			    $module = mysql_result($result, $i, 3);
			    $desc = mysql_result($result, $i, 4);
			    if (array_key_exists($name, $results)) {
				list($r,$t,$m,$d,$w,$u) = $results[$name];
				$results[$name] = array(($r + $relevance) * 2,
							$t,$m,$d,$w,$u);
			    } else {
				$id = strtoupper($name);
//				$m = strtolower($module);
				$m = $module;
				$url = "html/libxslt-$m.html#$id";
				$results[$name] = array($relevance,$type,
						$module, $desc, $name, $url);
			    }
			}
			mysql_free_result($result);
		    }
		}
		if (($scope == 'any') || ($scope == 'XML') ||
		    ($scope == 'DOCS') || ($scope == 'XMLDOC')) {
		    list($result, $k) = queryHTMLWord($word);
		    if ($k > 0) {
			for ($i = 0; $i < $k; $i++) {
			    $relevance = mysql_result($result, $i, 0);
			    $name = mysql_result($result, $i, 1);
			    $id = mysql_result($result, $i, 2);
			    $module = mysql_result($result, $i, 3);
			    $desc = mysql_result($result, $i, 4);
			    $url = $module;
			    if ($id != "") {
				$url = $url + "#$id";
			    }
			    $results["$name _html_ $number _ $i"] =
					  array($relevance, "XML docs",
						$module, $desc, $name, $url);
			}
			mysql_free_result($result);
		    }
		}
		if (($scope == 'any') || ($scope == 'XSLT') ||
		    ($scope == 'DOCS') || ($scope == 'XSLTDOC')) {
		    list($result, $k) = XSLTqueryHTMLWord($word);
		    if ($k > 0) {
			for ($i = 0; $i < $k; $i++) {
			    $relevance = mysql_result($result, $i, 0);
			    $name = mysql_result($result, $i, 1);
			    $id = mysql_result($result, $i, 2);
			    $module = mysql_result($result, $i, 3);
			    $desc = mysql_result($result, $i, 4);
			    $url = "$module";
			    if ($id != "") {
				$url = $url + "#$id";
			    }
			    $results["$name xslthtml $number _ $i "] =
					  array($relevance, "XSLT docs",
						$module, $desc, $name, $url);
			}
			mysql_free_result($result);
		    }
		}
		if (($scope == 'any') || ($scope == 'XML') ||
		    ($scope == 'LISTS') || ($scope == 'XMLLIST')) {
		    list($result, $j) = queryArchiveWord($word);
		    if ($j > 0) {
			for ($i = 0; $i < $j; $i++) {
			    $relevance = mysql_result($result, $i, 0);
			    $name = mysql_result($result, $i, 1);
			    $type = mysql_result($result, $i, 2);
			    $url = mysql_result($result, $i, 3);
			    $desc = mysql_result($result, $i, 4);
			    if (array_key_exists($url, $results)) {
				list($r,$t,$m,$d,$w,$u) = $results[$url];
				$results[$name] = array(($r + $relevance) * 2,
							$t,$m,$d,$w,$u);
			    } else {
				$id = strtoupper($name);
//				$m = strtolower($module);
				$m = $module;
				$u = str_replace(
			"http://mail.gnome.org/archives/xml/", "", $url);
				$results[$url] = array($relevance,$type,
						$u, $desc, $name, $url);
			    }
			}
			mysql_free_result($result);
		    }
		}
		if (($scope == 'any') || ($scope == 'XSLT') ||
		    ($scope == 'LISTS') || ($scope == 'XSLTLIST')) {
		    list($result, $j) = XSLTqueryArchiveWord($word);
		    if ($j > 0) {
			for ($i = 0; $i < $j; $i++) {
			    $relevance = mysql_result($result, $i, 0);
			    $name = mysql_result($result, $i, 1);
			    $type = mysql_result($result, $i, 2);
			    $url = mysql_result($result, $i, 3);
			    $desc = mysql_result($result, $i, 4);
			    if (array_key_exists($url, $results)) {
				list($r,$t,$m,$d,$w,$u) = $results[$url];
				$results[$name] = array(($r + $relevance) * 2,
							$t,$m,$d,$w,$u);
			    } else {
				$id = strtoupper($name);
//				$m = strtolower($module);
				$m = $module;
				$u = str_replace(
			"http://mail.gnome.org/archives/xslt/", "", $url);
				$results[$url] = array($relevance,$type,
						$u, $desc, $name, $url);
			    }
			}
			mysql_free_result($result);
		    }
		}
		if (($j <= 0) && ($k <= 0)) {
		    echo "<p> No result found for $word\n";
		}
	    }
	    mysql_close($link);
	    $nb = count($results);
	    echo "<h3 align='center'>Found $nb results for query $query</h3>\n";
	    usort($results, "resSort");

            if ($nb > 0) {
		printf("<table><tbody>\n");
		printf("<tr><td>Quality</td><td>Symbol</td><td>Type</td><td>module</td><td>Description</td></tr>\n");
		$i = 0;
		while (list ($name, $val) = each ($results)) {
		    list($r,$t,$m,$d,$s,$u) = $val;
		    $m = str_replace("<", "&lt;", $m);
		    $s = str_replace("<", "&lt;", $s);
		    $d = str_replace("<", "&lt;", $d);
		    echo "<tr><td>$r</td><td><a href='$u'>$s</a></td><td>$t</td><td>$m</td><td>$d</td></tr>";
		    $i = $i + 1;
		    if ($i > 75)
		        break;
		}
		printf("</tbody></table>\n");
	    }
	}
    }
?>
