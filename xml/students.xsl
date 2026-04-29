<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- Output as HTML -->
    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">

        <html>
        <head>
            <title>Student Result</title>
            <style>
                table {
                    border-collapse: collapse;
                    width: 60%;
                    margin: auto;
                    font-family: Arial;
                }
                th, td {
                    border: 1px solid black;
                    padding: 10px;
                    text-align: center;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>

        <body>
            <h2 style="text-align:center;">Student Result Table</h2>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Marks</th>
                    <th>Result</th>
                </tr>

                <xsl:for-each select="students/student">
                    <tr>
                        <td><xsl:value-of select="name"/></td>
                        <td><xsl:value-of select="roll"/></td>
                        <td><xsl:value-of select="marks"/></td>

                        <!-- Dynamic Result Calculation -->
                        <td>
                            <xsl:choose>
                                <xsl:when test="marks &gt;= 40">
                                    Pass
                                </xsl:when>
                                <xsl:otherwise>
                                    Fail
                                </xsl:otherwise>
                            </xsl:choose>
                        </td>
                    </tr>
                </xsl:for-each>

            </table>
        </body>

        </html>

    </xsl:template>

</xsl:stylesheet>