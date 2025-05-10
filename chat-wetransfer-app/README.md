# Chat WeTransfer App - Real World Ready Version

This is a local web application for end-to-end encrypted chat conversations with code sharing similar to WeTransfer. It is optimized to work locally on Android devices and other platforms.

## Features

- End-to-end encryption using ECDSA keys and AES-GCM encryption
- Message signing and verification for authenticity
- Blockchain-like message history with proof of work for integrity
- Real-time chat using WebSocket (socket.io)
- Generate and share unique chat room codes
- Responsive UI with Tailwind CSS, Google Fonts, and Font Awesome
- Works locally on Android browsers and other devices

## Setup and Run

1. Make sure you have Node.js installed on your machine.

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

5. On Android devices connected to the same local network, open the local IP address of the server on port 3000.

## Usage

- Click "Generate Code" to create a unique chat room code.
- Share the code with others to join the same chat room.
- Start chatting in real-time with end-to-end encryption.
- Messages are signed and verified for authenticity.
- Message history is maintained with blockchain-like proof of work.

## Notes

- This app is designed for local network usage.
- Make sure devices are connected to the same Wi-Fi network for chat to work.
- The app uses Web Crypto API, so use modern browsers that support it.
- Proof of work mining may cause slight delays when sending messages.

## License

MIT License
