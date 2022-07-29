USE [StockExchange]
GO

/****** Object:  Table [dbo].[Customer]    Script Date: 7/7/2022 8:55:42 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Customer](
	[PK_CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[Fname] [varchar](50) NOT NULL,
	[Lname] [varchar](50) NOT NULL,
	[Address] [varchar](50) NOT NULL,
	[Phone] [varchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Username] [varchar](50) NOT NULL,
	[Password] [char](10) NOT NULL,
	[CurrentCash] [decimal](18, 4) NOT NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[PK_CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [StockExchange]
GO

/****** Object:  Table [dbo].[Portfolio]    Script Date: 7/7/2022 9:11:03 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Portfolio](
	[PK_PortfolioID] [int] IDENTITY(1,1) NOT NULL,
	[FK_CustomerID] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[TotalStock] [int] NOT NULL,
	[TotalStockValue] [decimal](18, 4) NOT NULL,
 CONSTRAINT [PK_Portfolio] PRIMARY KEY CLUSTERED 
(
	[PK_PortfolioID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [StockExchange]
GO

/****** Object:  Table [dbo].[PortfolioStock]    Script Date: 7/7/2022 9:11:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PortfolioStock](
	[PK_PortfolioStockID] [int] IDENTITY(1,1) NOT NULL,
	[FK_PortfolioID] [int] NOT NULL,
	[FK_StockSymbolID] [int] NOT NULL,
	[StockAmount] [int] NOT NULL,
	[TotalValue] [decimal](18, 4) NOT NULL,
 CONSTRAINT [PK_PortfolioStock] PRIMARY KEY CLUSTERED 
(
	[PK_PortfolioStockID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [StockExchange]
GO

/****** Object:  Table [dbo].[StockData]    Script Date: 7/7/2022 9:12:35 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StockData](
	[PK_StockDataID] [int] IDENTITY(1,1) NOT NULL,
	[FK_StockSymbolID] [int] NOT NULL,
	[StockDate] [datetime] NOT NULL,
	[StockOpen] [decimal](9, 4) NOT NULL,
	[StockHigh] [decimal](9, 4) NOT NULL,
	[StockLow] [decimal](9, 4) NOT NULL,
	[StockClose] [decimal](9, 4) NOT NULL,
	[Volume] [decimal](9, 4) NOT NULL,
 CONSTRAINT [PK_StockData] PRIMARY KEY CLUSTERED 
(
	[PK_StockDataID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [StockExchange]
GO

/****** Object:  Table [dbo].[StockExchangeNames]    Script Date: 7/7/2022 9:12:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StockExchangeNames](
	[PK_StockExchangeID] [int] IDENTITY(1,1) NOT NULL,
	[StockExchangeName] [varchar](10) NOT NULL,
 CONSTRAINT [PK_StockExchangeNames] PRIMARY KEY CLUSTERED 
(
	[PK_StockExchangeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [StockExchange]
GO

/****** Object:  Table [dbo].[StockSymbols]    Script Date: 7/7/2022 9:13:10 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StockSymbols](
	[PK_StockSymbolID] [int] IDENTITY(1,1) NOT NULL,
	[FK_StockExchangeID] [int] NOT NULL,
	[Symbol] [varchar](5) NOT NULL,
 CONSTRAINT [PK_StockSymbols] PRIMARY KEY CLUSTERED 
(
	[PK_StockSymbolID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [StockExchange]
GO

/****** Object:  Table [dbo].[TransactionHistory]    Script Date: 7/7/2022 9:13:31 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TransactionHistory](
	[PK_TransactionHistoryID] [int] IDENTITY(1,1) NOT NULL,
	[FK_PortfolioStockID] [int] NOT NULL,
	[BrokerageFee] [decimal](18, 4) NOT NULL,
	[AmountSold] [int] NULL,
	[AmountBought] [int] NULL,
	[TotalValue] [decimal](18, 4) NOT NULL,
	[TransactionDate] [datetime] NOT NULL,
 CONSTRAINT [PK_TransactionHistory] PRIMARY KEY CLUSTERED 
(
	[PK_TransactionHistoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Portfolio]  WITH CHECK ADD  CONSTRAINT [FK_Portfolio_Customer] FOREIGN KEY([FK_CustomerID])
REFERENCES [dbo].[Customer] ([PK_CustomerID])
GO

ALTER TABLE [dbo].[Portfolio] CHECK CONSTRAINT [FK_Portfolio_Customer]
GO

ALTER TABLE [dbo].[PortfolioStock]  WITH CHECK ADD  CONSTRAINT [FK_PortfolioStock_Portfolio] FOREIGN KEY([FK_PortfolioID])
REFERENCES [dbo].[Portfolio] ([PK_PortfolioID])
GO

ALTER TABLE [dbo].[PortfolioStock] CHECK CONSTRAINT [FK_PortfolioStock_Portfolio]
GO

ALTER TABLE [dbo].[PortfolioStock]  WITH CHECK ADD  CONSTRAINT [FK_PortfolioStock_StockSymbols] FOREIGN KEY([FK_StockSymbolID])
REFERENCES [dbo].[StockSymbols] ([PK_StockSymbolID])
GO

ALTER TABLE [dbo].[PortfolioStock] CHECK CONSTRAINT [FK_PortfolioStock_StockSymbols]
GO

ALTER TABLE [dbo].[StockSymbols]  WITH CHECK ADD  CONSTRAINT [FK_StockSymbols_StockExchangeNames] FOREIGN KEY([FK_StockExchangeID])
REFERENCES [dbo].[StockExchangeNames] ([PK_StockExchangeID])
GO

ALTER TABLE [dbo].[StockSymbols] CHECK CONSTRAINT [FK_StockSymbols_StockExchangeNames]
GO

ALTER TABLE [dbo].[StockData]  WITH CHECK ADD  CONSTRAINT [FK_StockData_StockSymbols] FOREIGN KEY([FK_StockSymbolID])
REFERENCES [dbo].[StockSymbols] ([PK_StockSymbolID])
GO

ALTER TABLE [dbo].[StockData] CHECK CONSTRAINT [FK_StockData_StockSymbols]
GO

ALTER TABLE [dbo].[TransactionHistory]  WITH CHECK ADD  CONSTRAINT [FK_TransactionHistory_PortfolioStock] FOREIGN KEY([FK_PortfolioStockID])
REFERENCES [dbo].[PortfolioStock] ([PK_PortfolioStockID])
GO

ALTER TABLE [dbo].[TransactionHistory] CHECK CONSTRAINT [FK_TransactionHistory_PortfolioStock]
GO

SET IDENTITY_INSERT LOCATION ON;
INSERT INTO Customer (Fname, Lname, Address, Phone, Email, Username, Password, CurrentCash) VALUES ('John', 'Test', '123 test ave', '1234567890', 'jt@test.com','tester','password',10000.00)
SET IDENTITY_INSERT LOCATION OFF;