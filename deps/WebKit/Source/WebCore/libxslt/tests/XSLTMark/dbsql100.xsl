<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="table">
  <document>
    <!-- select * from table where id = ... -->
    <xsl:apply-templates select="row[id=3]"/>
    <xsl:apply-templates select="row[id=13]"/>
    <xsl:apply-templates select="row[id=23]"/>
    <xsl:apply-templates select="row[id=33]"/>
    <xsl:apply-templates select="row[id=43]"/>
    <xsl:apply-templates select="row[id=53]"/>
    <xsl:apply-templates select="row[id=63]"/>
    <xsl:apply-templates select="row[id=73]"/>
    <xsl:apply-templates select="row[id=83]"/>
    <xsl:apply-templates select="row[id=93]"/>
    <!-- select * from table where id > ... and id < ... -->
    <xsl:apply-templates select="row[id&gt;4 and id&lt;8]"/>
    <xsl:apply-templates select="row[id&gt;14 and id&lt;18]"/>
    <xsl:apply-templates select="row[id&gt;24 and id&lt;28]"/>
    <xsl:apply-templates select="row[id&gt;34 and id&lt;38]"/>
    <xsl:apply-templates select="row[id&gt;44 and id&lt;48]"/>
    <xsl:apply-templates select="row[id&gt;54 and id&lt;58]"/>
    <xsl:apply-templates select="row[id&gt;64 and id&lt;68]"/>
    <xsl:apply-templates select="row[id&gt;74 and id&lt;78]"/>
    <xsl:apply-templates select="row[id&gt;84 and id&lt;88]"/>
    <xsl:apply-templates select="row[id&gt;94 and id&lt;98]"/>
    <!-- select * from table where firstname = 'Bob' -->
    <xsl:apply-templates select="row[firstname='Bob']"/>
    <!-- select firstname, lastname from table where id=... -->
    <xsl:for-each select="row[id mod 10 = 9]">
       <xsl:apply-templates select="firstname"/>
       <xsl:apply-templates select="lastname"/>
    </xsl:for-each>
  </document>
</xsl:template>

<xsl:template match="row">
  <xsl:apply-templates select="id"/>
  <xsl:apply-templates select="firstname"/>
  <xsl:apply-templates select="lastname"/>
  <xsl:apply-templates select="street"/>
  <xsl:apply-templates select="city"/>
  <xsl:apply-templates select="state"/>
  <xsl:apply-templates select="zip"/>
  <xsl:text>&#x0A;</xsl:text>
</xsl:template>

<xsl:template match="id|firstname|lastname|street|city|state|zip">
  <xsl:value-of select="name(.)"/>
  <xsl:text>=</xsl:text>
  <xsl:value-of select="."/>
  <xsl:text>&#x0A;</xsl:text>
</xsl:template>

</xsl:stylesheet>
