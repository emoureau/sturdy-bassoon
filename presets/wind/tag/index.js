export default {
  root: ({ props }) => ({
    class: [
      // Font
      'text-xs font-bold',

      // Alignments
      'inline-flex items-center justify-center',

      // Spacing
      'px-2 py-1',

      // Shape
      {
        'rounded-md': !props.rounded,
        'rounded-full': props.rounded,
      },

      // Colors
      'dark:text-surface-900',
      {
        'bg-primary-200 dark:bg-primary-400 text-primary-900 dark:text-white': props.severity === null || props.severity === 'primary',
        'bg-success-200 dark:bg-success-400 text-success-900 dark:text-white': props.severity === 'success',
        'bg-info-200 dark:bg-info-400 text-info-900 dark:text-white': props.severity === 'info',
        'bg-warning-200 dark:bg-warning-400 text-warning-900 dark:text-white': props.severity === 'warning',
        'bg-danger-200 dark:bg-danger-400 text-danger-900 dark:text-white': props.severity === 'danger',
      },
    ],
  }),
  value: {
    class: 'leading-normal',
  },
  icon: {
    class: 'mr-1 text-sm',
  },
}
