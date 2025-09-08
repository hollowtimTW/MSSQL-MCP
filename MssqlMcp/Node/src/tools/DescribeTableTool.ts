import sql from "mssql";
import { Tool } from "@modelcontextprotocol/sdk/types.js";


export class DescribeTableTool implements Tool {
  [key: string]: any;
  name = "describe_table";
  description = "Describes the schema (columns and types) of a specified MSSQL Database table. Do not include schema in the table name.";
  inputSchema = {
    type: "object",
    properties: {
      tableName: { type: "string", description: "Name of the table to describe" },
    },
    required: ["tableName"],
  } as any;

  async run(params: { tableName: string }) {
    try {
    let { tableName } = params;
    // Remove schema if present (e.g., dbo.Users -> Users)
    if (tableName.includes('.')) {
      const parts = tableName.split('.');
      tableName = parts[parts.length - 1] || tableName;
    }
      const request = new sql.Request();
      const query = `SELECT COLUMN_NAME as name, DATA_TYPE as type FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = @tableName`;
      request.input("tableName", sql.NVarChar, tableName);
      const result = await request.query(query);
      return {
        success: true,
        columns: result.recordset,
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to describe table: ${error}`,
      };
    }
  }
}
