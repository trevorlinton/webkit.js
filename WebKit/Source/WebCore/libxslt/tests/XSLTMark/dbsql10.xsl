<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="table">
  <document>
    <!-- select * from table where id = ... -->
    <xsl:apply-templates select="row[id=3]"/>
    <!-- select * from table where id > ... and id < ... -->
    <xsl:apply-templates select="row[id&gt;4 and id&lt;8]"/>
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
