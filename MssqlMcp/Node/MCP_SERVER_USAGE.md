
# 使用 MSSQL MCP Server 

## 1. 前置作業

1. 安裝 [Node.js](https://nodejs.org/)
2. 安裝 [Git](https://git-scm.com/)
3. 下載 MSSQL MCP Server 原始碼：
	 ```sh
	 git clone https://github.com/hollowtimTW/MSSQL-MCP.git
	 ```
4. 進入 Node 專案目錄：
	 ```sh
	 cd SQL-AI-samples/MssqlMcp/Node
	 ```
5. 安裝相依套件：
	 ```sh
	 npm install
	 ```
6. 安裝完成後，記下 `dist/index.js` 的完整路徑，稍後設定會用到。

---

## 2. MCP Server 設定檔範例

### VS Code 版（`settings.json`）

```json
{
	"mcp": {
		"servers": {
			"MSSQL MCP": {
				"type": "stdio",
				"command": "node",
				"args": ["<<你的路徑>>\\MSSQL-MCP\\MssqlMcp\\Node\\dist\\index.js"],
				"env": {
					"SERVER_NAME": "<<伺服器名稱>>",
					"DATABASE_NAME": "<<資料庫名稱>>",
					"DB_USER": "<<資料庫帳號>>",
					"DB_PASSWORD": "<<資料庫密碼>>",
					"TRUST_SERVER_CERTIFICATE": "true",
					"READONLY": "true"
				}
			}
		}
	}
}
```

### Visual Studio 版（`.mcp.json`）

```json
{
	"inputs": [],
	"servers": {
		"MSSQL MCP": {
			"type": "stdio",
			"command": "node",
			"args": ["<<你的路徑>>\\MSSQL-MCP\\MssqlMcp\\Node\\dist\\index.js"],
			"env": {
				"SERVER_NAME": "<<伺服器名稱>>",
				"DATABASE_NAME": "<<資料庫名稱>>",
				"DB_USER": "<<資料庫帳號>>",
				"DB_PASSWORD": "<<資料庫密碼>>",
				"TRUST_SERVER_CERTIFICATE": "true",
				"READONLY": "true"
			}
		}
	}
}
```

> 請將 `<<你的路徑>>`、`<<伺服器名稱>>`、`<<資料庫名稱>>`、`<<資料庫帳號>>`、`<<資料庫密碼>>` 替換為你的實際資訊。
> `READONLY` 設為 `true` 時僅啟用查詢工具。

---

## 3. 啟用 Agent Mode

### VS Code
- 在 VS Code 切換至 Agent Mode。
- 點選 Tools，選擇 “MSSQL MCP” 作為 MCP Server。

### Visual Studio
- 在 Visual Studio 切換至 Agent Mode。
- 點選 Tools，選擇 “MSSQL MCP” 作為 MCP Server。

---

## 4. 啟動 MCP Server

### VS Code
- 在 `settings.json` 設定頁面點選 Start。

### Visual Studio
- 在 `.mcp.json` 設定頁面點選 Start。

---

## 5. 開始互動

- 在聊天視窗輸入自然語言指令，即可與 SQL Server 互動。

---

如需更詳細說明，請參考原始專案文件：[Azure-Samples/SQL-AI-samples](https://github.com/Azure-Samples/SQL-AI-samples)
