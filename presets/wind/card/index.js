export default {
  root: {
    class: [
      // Shape
      'rounded-lg',
      'shadow-md',

      // Color
      'bg-surface-0 dark:bg-surface-900',
      'text-surface-700 dark:text-surface-0/80',
    ],
  },
  header: {
    class: ['border-b border-surface-200 dark:border-surface-700'],
  },
  body: {
    class: 'py-3',
  },
  title: {
    class: 'text-lg font-medium mb-2 px-3 md:px-4',
  },
  subtitle: {
    class: [
      // Spacing
      'mb-1 px-3 md:px-4',

      // Color
      'text-surface-600 dark:text-surface-0/60',
    ],
  },
  content: {
    class: 'py-4 px-3 md:px-4',
  },
  footer: {
    class: ['px-3 md:px-4 pt-3 pb-0', 'border-t border-surface-200 dark:border-surface-700'],
  },
}
