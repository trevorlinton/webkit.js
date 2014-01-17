<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:output method="html" indent="yes" encoding="utf-8"/>

<xsl:template match="table">
  <html>
    <head>
      <title>XSLT-generated HTML Table</title>  
    </head>
    <body>
      <table>
        <xsl:apply-templates/>
      </table>
    </body>
  </html>
</xsl:template>

<xsl:template match="row">
  <tr>
    <xsl:apply-templates select="id"/>
    <xsl:apply-templates select="firstname"/>
    <xsl:apply-templates select="lastname"/>
    <xsl:apply-templates select="street"/>
    <xsl:apply-templates select="city"/>
    <xsl:apply-templates select="state"/>
    <xsl:apply-templates select="zip"/>
  </tr>
</xsl:template>

<xsl:template match="id|firstname|lastname|street|city|state|zip">
  <td>
    <xsl:value-of select="."/>
  </td>
</xsl:template>

</xsl:stylesheet>
