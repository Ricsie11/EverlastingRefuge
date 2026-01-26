export default function Footer() {
  return (
<footer className="border-t border-gray-200 dark:border-gray-700 mt-16 bg-gray-300 dark:bg-zinc-800 text-gray-700 dark:text-gray-200">
  <div className="w-full py-8 text-sm text-center">
    © {new Date().getFullYear()} Everlasting Refuge Parish. All rights Reserved.
  </div>
</footer>
  );
}