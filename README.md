# Proof of Time

**time.juoum.pt**

A minimalist, single-page web application that provides a high-precision UTC clock alongside real-time Bitcoin blockchain data.

## Overview

This project serves as a "Proof of Time" dashboard, displaying the current Coordinated Universal Time (UTC) with millisecond precision. It also connects to the Bitcoin network to fetch and display the latest mined blocks, providing a cryptographic heartbeat of the network.

## Features

- **Precision UTC Clock**: Displays time in `HH:MM:SS.mmm` format, updated every frame for high accuracy.
- **Bitcoin Blockchain Monitor**: Fetches the latest blocks from the Bitcoin network.
  - **Block Height**: The current block number.
  - **Mining Time**: The UTC time when the block was mined.
  - **Block Hash**: The unique cryptographic identifier for the block (displayed in full).
- **Auto-Refresh**: Automatically polls for new blocks every 10 seconds.
- **Responsive Design**: Clean, terminal-inspired aesthetic using the JetBrains Mono font.