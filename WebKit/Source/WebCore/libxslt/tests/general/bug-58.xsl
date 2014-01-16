<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:msxsl="http://exslt.org/common" extension-element-prefixes="msxsl">
  <xsl:output method="html" version="1.0" encoding="iso-8859-1" indent="yes"/>
  
  <xsl:param name="document-name"/>
  
  <xsl:variable name="stylesheet-tree" >
    <stylesheet href="{$document-name}">
      <xsl:apply-templates select="/" mode="tree-building"/>
    </stylesheet>
  </xsl:variable>
  
  <xsl:template match="/">
    <html xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:spec="http://www.macaw.nl/namespaces/creaim/html-specials" xmlns:fml="http://www.macaw.nl/namespaces/creaim/formsML">
      <head>
        <title>Documentation for: <xsl:value-of select="$document-name"/></title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css" title="Style"/>
        <script >
          <xsl:comment>
            function toggleElm(elmid)
            {
              var elmstyle = document.all(elmid).style;
              //alert(document.all(elmid).nodeName);
              if (elmstyle.display == "none")
              {
                elmstyle.display = "";
              }else{
                elmstyle.display = "none";
              }
              //alert(elmstyle.display);
            }
          </xsl:comment>
        </script>
      </head>
      <body>
       <h1>Documentation for: <xsl:value-of select="$document-name"/></h1>
       <xsl:for-each select="xsl:stylesheet/preceding::comment()">
         <xsl:value-of select="self::comment()" disable-output-escaping="yes"/><br/>
       </xsl:for-each>
       <h2>Import/Include tree</h2>
      <xsl:call-template name="display-stylesheet-tree">
      </xsl:call-template>
       <h2>Parameters</h2>
      <xsl:apply-templates select="xsl:stylesheet/xsl:param"/>
       <h2>Global variables</h2>
      <xsl:apply-templates select="xsl:stylesheet/xsl:variable"/>
       <h2>Templates</h2>
      <xsl:apply-templates select="xsl:stylesheet/xsl:template"/>
       <h2>Other top-level elements</h2>
      <xsl:apply-templates select="xsl:stylesheet/xsl:decimal-format|xsl:stylesheet/xsl:atribute-set|xsl:stylesheet/xsl:key|xsl:stylesheet/xsl:output|xsl:stylesheet/xsl:namespace-alias|xsl:stylesheet/xsl:preserve-space|xsl:stylesheet/xsl:strip-space"/>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="xsl:stylesheet/xsl:*">
  
  <a name="elmxsl_{translate(local-name(), ':.', '__')}|{@name}|{@match}"></a>
    <xsl:call-template name="display-xsl-element">
      <xsl:with-param  name="elm" select="self::*"/>
    </xsl:call-template>
    <xsl:if test="msxsl:node-set($stylesheet-tree)/stylesheet/stylesheet[@method='import']/descendant::xsl:*[name()=name(current())][@match=current()/@match][(@mode=current()/@mode) or (not(@mode) and not(current()/@mode))]">
       Overriding identical match pattern: <xsl:apply-templates select="msxsl:node-set($stylesheet-tree)/stylesheet/stylesheet[@method='import']/descendant::xsl:*[name()=name(current())][@match=current()/@match][1]" mode="refer-to"/>
      <br/>
     </xsl:if> 
    <xsl:if test="msxsl:node-set($stylesheet-tree)/stylesheet/stylesheet[@method='import']/descendant::xsl:*[name()=name(current())][@name=current()/@name][(@mode=current()/@mode) or (not(@mode) and not(current()/@mode))]">
       Overriding identical name: <xsl:apply-templates select="msxsl:node-set($stylesheet-tree)/stylesheet/stylesheet[@method='import']/descendant::xsl:*[name()=name(current())][@name=current()/@name][1]" mode="refer-to"/>
      <br/>
     </xsl:if> 
     <xsl:variable name="comments-before-this-element" select="preceding-sibling::comment()"/>
     <xsl:variable name="previous-element-id">
       <xsl:choose>
         <xsl:when test="preceding-sibling::*">
           <xsl:value-of select="generate-id(preceding-sibling::*[1])"/>
         </xsl:when>
         <xsl:otherwise>
           <xsl:value-of select="generate-id(parent::*)"/>
         </xsl:otherwise>
       </xsl:choose>
     </xsl:variable>
     <xsl:variable name="comments-before-previous-element" select="/descendant::*[generate-id() = $previous-element-id]/preceding-sibling::comment()"/>
     <xsl:variable name="comments-between" select="$comments-before-this-element[count(.|$comments-before-previous-element) != count($comments-before-previous-element)] "/>
     <xsl:for-each select="msxsl:node-set($comments-between)">
       <xsl:value-of select="self::comment()" disable-output-escaping="yes"/><br/>
     </xsl:for-each>

     <a>
      <xsl:attribute name="href">javascript:toggleElm('code<xsl:value-of select="generate-id()"/>')</xsl:attribute>
      View code
     </a>
     <PRE STYLE="border-style:solid;display:none;">
       <xsl:attribute name="id">code<xsl:value-of select="generate-id()"/></xsl:attribute>
       <xsl:apply-templates select="self::*" mode="code-output" />
     </PRE>

     <hr/>
  </xsl:template>
  
  <xsl:template match="/" mode="tree-building">
    <xsl:param name="included-from"/>
    <xsl:apply-templates select="descendant::xsl:template|descendant::xsl:variable|descendant::xsl:param" mode="tree-building">
      <xsl:with-param name="included-from" select="$included-from"/>
    </xsl:apply-templates>
     <xsl:for-each select="descendant::xsl:import">
       <stylesheet method="import">
         <xsl:attribute name="href"><xsl:value-of  select="@href"/></xsl:attribute>
         <xsl:apply-templates select="document(@href)" mode="tree-building"/>
       </stylesheet>
     </xsl:for-each>
     <xsl:for-each select="descendant::xsl:include">
       <stylesheet method="include"><xsl:attribute name="href"><xsl:value-of  select="@href"/></xsl:attribute></stylesheet>
       <xsl:attribute name="href"><xsl:value-of  select="@href"/></xsl:attribute>
       <xsl:apply-templates select="document(@href)" mode="tree-building">
         <xsl:with-param name="included-from" select="@href"/>
       </xsl:apply-templates>
     </xsl:for-each>
  </xsl:template>
  
  <xsl:template match="xsl:template|xsl:variable|xsl:param|@mode|@match|@name" mode="tree-building" >
    <xsl:param name="included-from"/>
    <xsl:copy>
      <xsl:if test="$included-from"><xsl:attribute name="included-from" ><xsl:value-of select="$included-from"/></xsl:attribute></xsl:if>
      <xsl:apply-templates select="@mode|@match|@name" mode="tree-building"/>
    </xsl:copy>
  
  </xsl:template>

  <xsl:template match="xsl:template|xsl:variable|xsl:param" mode="refer-to" >

     <xsl:call-template name="link-to-stylesheet">
       <xsl:with-param name="linking-text">
        <xsl:call-template name="display-xsl-element-inline"/>
        in <xsl:value-of select="parent::stylesheet/@href"/>
       </xsl:with-param>
     </xsl:call-template>
  </xsl:template>

  <xsl:template name="display-xsl-element">
    <xsl:param name="elm"/>
     &lt;
     <span class="xsl-elm"><xsl:value-of select="name($elm)"/></span><br/>
     <xsl:for-each select="@*">
       <span style="margin-left:20"><xsl:call-template name="display-attribute"></xsl:call-template><br/></span>
     </xsl:for-each>

     &gt;<br/>
    <xsl:for-each select="xsl:param">
    Parameter: <xsl:call-template name="display-xsl-element-inline"/><br/>
    </xsl:for-each>
     
  </xsl:template>
  
  <xsl:template name="display-xsl-element-inline">
    <xsl:param name="elm" select="current()"/>
     &lt;<span class="xsl-elm"><xsl:value-of select="name(msxsl:node-set($elm))"/></span>
     <xsl:for-each select="@*">
       <xsl:text> </xsl:text>
       <xsl:call-template name="display-attribute"></xsl:call-template>
     </xsl:for-each>

     &gt;
     
  </xsl:template>
  <xsl:template name="display-attribute">
    <xsl:param name="attr" select="current()"/>
     <span class="xsl-attr-name"><xsl:value-of select="name(msxsl:node-set($attr))"/></span> <xsl:text>=</xsl:text>

     <span class="xsl-attr-value"><xsl:value-of select="msxsl:node-set($attr)"/></span> 
  </xsl:template>

  <xsl:template name="display-stylesheet-tree">
    <xsl:value-of select="$document-name"/><br/>
    <xsl:for-each select="msxsl:node-set($stylesheet-tree)/stylesheet/descendant::stylesheet">
      <span style="margin-left:{20*(count(ancestor::*)+1)}">
      <xsl:value-of select="@method"/>: 
      <xsl:call-template name="link-to-stylesheet"/>
      </span><br/>
    </xsl:for-each>
  </xsl:template>

  <xsl:template name="filename-for-stylesheet-name">
    <xsl:param name="stylesheet-name"></xsl:param>
    <xsl:value-of select="translate($stylesheet-name, './\', '___')"/>
    <xsl:text>.htm</xsl:text>
  </xsl:template>


  <xsl:template name="link-to-stylesheet">
    <xsl:param name="node" select="current()"/>
    <xsl:param name="linking-text" />
    <xsl:variable name="local-linking-text">
      <xsl:choose>
      <xsl:when test="$linking-text"><xsl:copy-of select="$linking-text"/></xsl:when>
       <xsl:otherwise><xsl:value-of select="$node/ancestor-or-self::stylesheet[1]/@href"/></xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <a>
    <xsl:attribute name="href">
    <xsl:call-template name="filename-for-stylesheet-name"><xsl:with-param name="stylesheet-name" select="$node/ancestor-or-self::stylesheet[1]/@href"/>
    </xsl:call-template>
     <xsl:if test="not(local-name($node) = 'stylesheet')">
       <xsl:text>#elmxsl_</xsl:text><xsl:value-of select="translate(local-name($node), ':.', '__')"/>|<xsl:value-of select="$node/@name"/>|<xsl:value-of select="$node/@match"/>
     </xsl:if>
    </xsl:attribute>
     <xsl:copy-of select="$local-linking-text"/>
    </a>
  </xsl:template>


    
  <xsl:template match="text()" priority="1" mode="code-output">
    <xsl:value-of select="self::text()" />
  </xsl:template>

  <xsl:template match="*" mode="code-output">
    <xsl:text>&lt;</xsl:text>
    <xsl:apply-templates select="current()" mode="show-name"/>
    <xsl:apply-templates select="@*" mode="code-output"/>
    <xsl:text>&gt;</xsl:text>
    <xsl:apply-templates select="node()" mode="code-output"/>
    <xsl:text>&lt;/</xsl:text>
    <xsl:apply-templates select="current()" mode="show-name"/>
    <xsl:text>&gt;</xsl:text>
  </xsl:template>

  <xsl:template match="@*" mode="code-output">
    <xsl:text> </xsl:text>
    <xsl:value-of select="name()"/>
    <xsl:text>=&quot;</xsl:text><xsl:value-of select="current()"/><xsl:text>&quot;</xsl:text>
  </xsl:template>

  <xsl:template match="xsl:*/@*" mode="code-output">
    <xsl:text> </xsl:text>
    <span class="xsl-attr-name">
      <xsl:value-of select="name()"/>
    </span>
    <span class="xsl-attr-value">
      <xsl:text>=&quot;</xsl:text><xsl:value-of select="current()"/><xsl:text>&quot;</xsl:text>
    </span>
  </xsl:template>

  <xsl:template match="xsl:call-template/@name" mode="code-output">
    <xsl:text> </xsl:text>
    <xsl:value-of select="name()"/>
    <xsl:text>=&quot;</xsl:text>
    <xsl:call-template name="link-to-stylesheet">
    <xsl:with-param name="node" select="msxsl:node-set($stylesheet-tree)/descendant::xsl:template[@name=current()][1]"/>
    <xsl:with-param name="linking-text" select="string(current())"/>
    </xsl:call-template>
    <xsl:text>&quot;</xsl:text>
  </xsl:template>

  <xsl:template match="comment()" mode="code-output">
    <span class="xsl-comment">
    <xsl:text><![CDATA[<!--]]></xsl:text>
    <xsl:value-of select="current()"/>
    <xsl:text><![CDATA[-->]]></xsl:text>
    </span>
  </xsl:template>

  <xsl:template match="*" mode="show-name">
    <xsl:value-of select="name()"/>
  </xsl:template>

  <xsl:template match="xsl:*" mode="show-name">
    <a class="xsl-elm" target="_blank">
      <xsl:attribute name="href">http://www.vbxml.com/xsl/elmxsl_<xsl:value-of select="translate(local-name(), ':.', '__')"/>.asp</xsl:attribute>
    <xsl:value-of select="name()"/>
    </a>
  </xsl:template>



</xsl:stylesheet>
