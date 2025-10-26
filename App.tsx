import React from 'react';

const App: React.FC = () => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShowGreeting = () => {
    const newTab = window.open();
    if (newTab) {
      newTab.document.write(`
        <!DOCTYPE html>
        <html lang="ja">
        <head>
          <meta charset="UTF-8">
          <title>ごあいさつ</title>
          <style>
            body { 
              display: flex; 
              justify-content: center; 
              align-items: center; 
              height: 100vh; 
              margin: 0; 
              font-family: sans-serif;
              font-size: 3rem;
              background-color: #f4f4f9;
              color: #333;
            }
          </style>
        </head>
        <body>
          こんにちは
        </body>
        </html>
      `);
      newTab.document.close();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">ボタン</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">下のボタンをクリックしてください</p>

        <div className="space-y-4">
          <button
            onClick={handleShowGreeting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
          >
            あいさつを表示
          </button>
          <button
            onClick={() => openInNewTab('https://yahoo.co.jp')}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-800"
          >
            Yahoo! JAPAN を開く
          </button>
          <button
            onClick={() => openInNewTab('https://www.google.com/maps')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800"
          >
            Google マップを開く
          </button>
        </div>
      </div>
       <footer className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
        <p>A simple React application.</p>
      </footer>
    </div>
  );
};

export default App;
