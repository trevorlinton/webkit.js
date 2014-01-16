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
    <xsl:apply-templates select="row[id=103]"/>
    <xsl:apply-templates select="row[id=113]"/>
    <xsl:apply-templates select="row[id=123]"/>
    <xsl:apply-templates select="row[id=133]"/>
    <xsl:apply-templates select="row[id=143]"/>
    <xsl:apply-templates select="row[id=153]"/>
    <xsl:apply-templates select="row[id=163]"/>
    <xsl:apply-templates select="row[id=173]"/>
    <xsl:apply-templates select="row[id=183]"/>
    <xsl:apply-templates select="row[id=193]"/>
    <xsl:apply-templates select="row[id=203]"/>
    <xsl:apply-templates select="row[id=213]"/>
    <xsl:apply-templates select="row[id=223]"/>
    <xsl:apply-templates select="row[id=233]"/>
    <xsl:apply-templates select="row[id=243]"/>
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
    <xsl:apply-templates select="row[id&gt;104 and id&lt;108]"/>
    <xsl:apply-templates select="row[id&gt;114 and id&lt;118]"/>
    <xsl:apply-templates select="row[id&gt;124 and id&lt;128]"/>
    <xsl:apply-templates select="row[id&gt;134 and id&lt;138]"/>
    <xsl:apply-templates select="row[id&gt;144 and id&lt;148]"/>
    <xsl:apply-templates select="row[id&gt;154 and id&lt;158]"/>
    <xsl:apply-templates select="row[id&gt;164 and id&lt;168]"/>
    <xsl:apply-templates select="row[id&gt;174 and id&lt;178]"/>
    <xsl:apply-templates select="row[id&gt;184 and id&lt;188]"/>
    <xsl:apply-templates select="row[id&gt;194 and id&lt;198]"/>
    <xsl:apply-templates select="row[id&gt;204 and id&lt;208]"/>
    <xsl:apply-templates select="row[id&gt;214 and id&lt;218]"/>
    <xsl:apply-templates select="row[id&gt;224 and id&lt;228]"/>
    <xsl:apply-templates select="row[id&gt;234 and id&lt;238]"/>
    <xsl:apply-templates select="row[id&gt;244 and id&lt;248]"/>
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
