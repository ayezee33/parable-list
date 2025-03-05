export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Parable List. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 