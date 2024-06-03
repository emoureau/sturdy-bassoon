export default {
  root: ({ props, context, parent }) => ({
    class: [
      'relative',

      // Alignments
      'items-center justify-center inline-flex text-center align-bottom',

      // Sizes & Spacing
      'text-sm',
      {
        'px-2.5 py-1.5 min-w-[2rem]': props.size === null,
        'px-2 py-1': props.size === 'small',
        'px-3 py-2': props.size === 'large',
      },
      {
        'h-8 w-8 p-0': props.label == null && props.icon !== null,
      },

      // Shapes
      { 'shadow-sm': (!props.link && !props.text) || props.raised },
      { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
      { 'rounded-none first:rounded-l-md last:rounded-r-md self-center': parent.instance.$name === 'InputGroup' },

      // Link Button
      { 'text-primary-600 bg-transparent ring-transparent': props.link },

      // Plain Button
      { 'text-white bg-gray-500 ring-1 ring-gray-500': props.plain && !props.outlined && !props.text },
      // Plain Text Button
      { 'text-surface-500': props.plain && props.text },
      // Plain Outlined Button
      { 'text-surface-500 ring-1 ring-gray-500': props.plain && props.outlined },

      // Text Button
      { 'bg-transparent ring-transparent': props.text && !props.plain },

      // Outlined Button
      { 'bg-transparent': props.outlined && !props.plain },

      // --- Severity Buttons ---

      // Primary Button
      {
        'text-white dark:text-surface-900': !props.link && (props.severity === null || props.severity === 'primary') && !props.text && !props.outlined && !props.plain,
        'bg-primary-500 dark:bg-primary-400': !props.link && (props.severity === null || props.severity === 'primary') && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-primary-500 dark:ring-primary-400': !props.link && (props.severity === null || props.severity === 'primary') && !props.text && !props.outlined && !props.plain,
      },
      // Primary Text Button
      { 'text-primary-500 dark:text-primary-400': props.text && (props.severity === null || props.severity === 'primary') && !props.plain },
      // Primary Outlined Button
      { 'text-primary-500 ring-1 ring-primary-500 hover:bg-primary-300/20': props.outlined && (props.severity === null || props.severity === 'primary') && !props.plain },

      // Secondary Button
      {
        'text-white dark:text-secondary-900': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
        'bg-secondary-500 dark:bg-secondary-400': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-secondary-500 dark:ring-secondary-400': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
      },
      // Secondary Text Button
      { 'text-secondary-500 dark:text-secondary-400': props.text && props.severity === 'secondary' && !props.plain },
      // Secondary Outlined Button
      { 'text-secondary-500 ring-1 ring-secondary-500 hover:bg-secondary-300/20': props.outlined && props.severity === 'secondary' && !props.plain },

      // Success Button
      {
        'text-white dark:text-success-900': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
        'bg-success-500 dark:bg-success-400': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-success-500 dark:ring-success-400': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
      },
      // Success Text Button
      { 'text-success-500 dark:text-success-400': props.text && props.severity === 'success' && !props.plain },
      // Success Outlined Button
      { 'text-success-500 ring-1 ring-success-500 hover:bg-success-300/20': props.outlined && props.severity === 'success' && !props.plain },

      // Info Button
      {
        'text-white dark:text-surface-900': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
        'bg-info-500 dark:bg-info-400': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-info-500 dark:ring-info-400': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
      },
      // Info Text Button
      { 'text-info-500 dark:text-info-400': props.text && props.severity === 'info' && !props.plain },
      // Info Outlined Button
      { 'text-info-500 ring-1 ring-info-500 hover:bg-info-300/20 ': props.outlined && props.severity === 'info' && !props.plain },

      // Warning Button
      {
        'text-white dark:text-surface-900': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
        'bg-warning-500 dark:bg-warning-400': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-warning-500 dark:ring-warning-400': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
      },
      // Warning Text Button
      { 'text-warning-500 dark:text-warning-400': props.text && props.severity === 'warning' && !props.plain },
      // Warning Outlined Button
      { 'text-warning-500 ring-1 ring-warning-500 hover:bg-warning-300/20': props.outlined && props.severity === 'warning' && !props.plain },

      // Help Button
      {
        'text-white dark:text-surface-900': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
        'bg-help-500 dark:bg-help-400': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-help-500 dark:ring-help-400': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
      },
      // Help Text Button
      { 'text-help-500 dark:text-help-400': props.text && props.severity === 'help' && !props.plain },
      // Help Outlined Button
      { 'text-help-500 ring-1 ring-help-500 hover:bg-help-300/20': props.outlined && props.severity === 'help' && !props.plain },

      // Danger Button
      {
        'text-white dark:text-surface-900': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
        'bg-danger-500 dark:bg-danger-400': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-danger-500 dark:ring-danger-400': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
      },
      // Danger Text Button
      { 'text-danger-500 dark:text-danger-400': props.text && props.severity === 'danger' && !props.plain },
      // Danger Outlined Button
      { 'text-danger-500 ring-1 ring-danger-500 hover:bg-danger-300/20': props.outlined && props.severity === 'danger' && !props.plain },

      //////////////////////////////////////////////////////////////////////////
      // EXTRA COLORS
      // Rose Button
      {
        'text-white dark:text-surface-900': props.severity === 'rose' && !props.text && !props.outlined && !props.plain,
        'bg-rose-500 dark:bg-rose-400': props.severity === 'rose' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-rose-500 dark:ring-rose-400': props.severity === 'rose' && !props.text && !props.outlined && !props.plain,
      },
      // Rose Text Button
      { 'text-rose-500 dark:text-rose-400': props.text && props.severity === 'rose' && !props.plain },
      // Rose Outlined Button
      { 'text-rose-500 ring-1 ring-rose-500 hover:bg-rose-300/20': props.outlined && props.severity === 'rose' && !props.plain },

      // Sky Button
      {
        'text-white dark:text-surface-900': props.severity === 'sky' && !props.text && !props.outlined && !props.plain,
        'bg-sky-500 dark:bg-sky-400': props.severity === 'sky' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-sky-500 dark:ring-sky-400': props.severity === 'sky' && !props.text && !props.outlined && !props.plain,
      },
      // Sky Text Button
      { 'text-sky-500 dark:text-sky-400': props.text && props.severity === 'sky' && !props.plain },
      // Sky Outlined Button
      { 'text-sky-500 ring-1 ring-sky-500 hover:bg-sky-300/20': props.outlined && props.severity === 'sky' && !props.plain },

      // Cyan Button
      {
        'text-white dark:text-surface-900': props.severity === 'cyan' && !props.text && !props.outlined && !props.plain,
        'bg-cyan-500 dark:bg-cyan-400': props.severity === 'cyan' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-cyan-500 dark:ring-cyan-400': props.severity === 'cyan' && !props.text && !props.outlined && !props.plain,
      },
      // Cyan Text Button
      { 'text-cyan-500 dark:text-cyan-400': props.text && props.severity === 'cyan' && !props.plain },
      // Cyan Outlined Button
      { 'text-cyan-500 ring-1 ring-cyan-500 hover:bg-cyan-300/20': props.outlined && props.severity === 'cyan' && !props.plain },

      // Purple Button
      {
        'text-white dark:text-surface-900': props.severity === 'purple' && !props.text && !props.outlined && !props.plain,
        'bg-purple-500 dark:bg-purple-400': props.severity === 'purple' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-purple-500 dark:ring-purple-400': props.severity === 'purple' && !props.text && !props.outlined && !props.plain,
      },
      // Purple Text Button
      { 'text-purple-500 dark:text-purple-400': props.text && props.severity === 'purple' && !props.plain },
      // Purple Outlined Button
      { 'text-purple-500 ring-1 ring-purple-500 hover:bg-purple-300/20': props.outlined && props.severity === 'purple' && !props.plain },

      // Orange Button
      {
        'text-white dark:text-surface-900': props.severity === 'orange' && !props.text && !props.outlined && !props.plain,
        'bg-orange-500 dark:bg-orange-400': props.severity === 'orange' && !props.text && !props.outlined && !props.plain,
        'ring-1 ring-orange-500 dark:ring-orange-400': props.severity === 'orange' && !props.text && !props.outlined && !props.plain,
      },
      // Orange Text Button
      { 'text-orange-500 dark:text-orange-400': props.text && props.severity === 'orange' && !props.plain },
      // Orange Outlined Button
      { 'text-orange-500 ring-1 ring-orange-500 hover:bg-orange-300/20': props.outlined && props.severity === 'orange' && !props.plain },
      //////////////////////////////////////////////////////////////////////////

      // --- Severity Button States ---
      'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current',
      { 'focus:ring-offset-2': !props.link && !props.plain && !props.outlined && !props.text },

      // Link
      { 'focus:ring-primary-500 dark:focus:ring-primary-400': props.link },

      // Plain
      { 'hover:bg-gray-600 hover:ring-gray-600': props.plain && !props.outlined && !props.text },
      // Text & Outlined Button
      { 'hover:bg-surface-300/20': props.plain && (props.text || props.outlined) },

      // Primary
      { 'hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-600 dark:hover:ring-primary-300': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-primary-500 dark:focus:ring-primary-400': props.severity === null },
      // Text & Outlined Button
      { 'hover:bg-primary-300/20': (props.text || props.outlined) && props.severity === null && !props.plain },

      // Secondary
      { 'hover:bg-secondary-600 dark:hover:bg-secondary-300 hover:ring-secondary-600 dark:hover:ring-secondary-300': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-secondary-500 dark:focus:ring-secondary-400': props.severity === 'secondary' },
      // Text & Outlined Button
      { 'hover:bg-secondary-300/20': (props.text || props.outlined) && props.severity === 'secondary' && !props.plain },

      // Success
      { 'hover:bg-success-600 dark:hover:bg-success-300 hover:ring-success-600 dark:hover:ring-success-300': props.severity === 'success' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-success-500 dark:focus:ring-success-400': props.severity === 'success' },
      // Text & Outlined Button
      { 'hover:bg-success-300/20': (props.text || props.outlined) && props.severity === 'success' && !props.plain },

      // Info
      { 'hover:bg-info-600 dark:hover:bg-info-300 hover:ring-info-600 dark:hover:ring-info-300': props.severity === 'info' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-info-500 dark:focus:ring-info-400': props.severity === 'info' },
      // Text & Outlined Button
      { 'hover:bg-info-300/20': (props.text || props.outlined) && props.severity === 'info' && !props.plain },

      // Warning
      { 'hover:bg-warning-600 dark:hover:bg-warning-300 hover:ring-warning-600 dark:hover:ring-warning-300': props.severity === 'warning' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-warning-500 dark:focus:ring-warning-400': props.severity === 'warning' },
      // Text & Outlined Button
      { 'hover:bg-warning-300/20': (props.text || props.outlined) && props.severity === 'warning' && !props.plain },

      // Help
      { 'hover:bg-help-600 dark:hover:bg-help-300 hover:ring-help-600 dark:hover:ring-help-300': props.severity === 'help' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-help-500 dark:focus:ring-help-400': props.severity === 'help' },
      // Text & Outlined Button
      { 'hover:bg-help-300/20': (props.text || props.outlined) && props.severity === 'help' && !props.plain },

      // Danger
      { 'hover:bg-danger-600 dark:hover:bg-danger-300 hover:ring-danger-600 dark:hover:ring-danger-300': props.severity === 'danger' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-danger-500 dark:focus:ring-danger-400': props.severity === 'danger' },
      // Text & Outlined Button
      { 'hover:bg-danger-300/20': (props.text || props.outlined) && props.severity === 'danger' && !props.plain },

      //////////////////////////////////////////////////////////////////////////
      // EXTRA COLORS
      // Rose
      { 'hover:bg-rose-600 dark:hover:bg-rose-300 hover:ring-rose-600 dark:hover:ring-rose-300': props.severity === 'rose' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-rose-500 dark:focus:ring-rose-400': props.severity === 'rose' },
      // Text & Outlined Button
      { 'hover:bg-rose-300/20': (props.text || props.outlined) && props.severity === 'rose' && !props.plain },

      // Orange
      { 'hover:bg-orange-600 dark:hover:bg-orange-300 hover:ring-orange-600 dark:hover:ring-orange-300': props.severity === 'orange' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-orange-500 dark:focus:ring-orange-400': props.severity === 'orange' },
      // Text & Outlined Button
      { 'hover:bg-orange-300/20': (props.text || props.outlined) && props.severity === 'orange' && !props.plain },

      // Sky
      { 'hover:bg-sky-600 dark:hover:bg-sky-300 hover:ring-sky-600 dark:hover:ring-sky-300': props.severity === 'sky' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-sky-500 dark:focus:ring-sky-400': props.severity === 'sky' },
      // Text & Outlined Button
      { 'hover:bg-sky-300/20': (props.text || props.outlined) && props.severity === 'sky' && !props.plain },

      // Cyan
      { 'hover:bg-cyan-600 dark:hover:bg-cyan-300 hover:ring-cyan-600 dark:hover:ring-cyan-300': props.severity === 'cyan' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-cyan-500 dark:focus:ring-cyan-400': props.severity === 'cyan' },
      // Text & Outlined Button
      { 'hover:bg-cyan-300/20': (props.text || props.outlined) && props.severity === 'cyan' && !props.plain },

      // Purple
      { 'hover:bg-purple-600 dark:hover:bg-purple-300 hover:ring-purple-600 dark:hover:ring-purple-300': props.severity === 'purple' && !props.text && !props.outlined && !props.plain },
      { 'focus:ring-purple-500 dark:focus:ring-purple-400': props.severity === 'purple' },
      // Text & Outlined Button
      { 'hover:bg-purple-300/20': (props.text || props.outlined) && props.severity === 'purple' && !props.plain },
      //////////////////////////////////////////////////////////////////////////

      // Disabled
      { 'opacity-60 pointer-events-none cursor-default': context.disabled },

      // Transitions
      'transition duration-200 ease-in-out',

      // Misc
      'cursor-pointer overflow-hidden select-none',
    ],
  }),
  label: ({ props }) => ({
    class: [
      'duration-200',
      'font-semibold',
      {
        'hover:underline': props.link,
      },
      { 'flex-1': props.label !== null, 'invisible w-0': props.label == null },
    ],
  }),
  icon: ({ props }) => ({
    class: [
      'mx-0',
      {
        'mr-2': props.iconPos === 'left' && props.label != null,
        'ml-2 order-1': props.iconPos === 'right' && props.label != null,
        'mb-2': props.iconPos === 'top' && props.label != null,
        'mt-2': props.iconPos === 'bottom' && props.label != null,
      },
    ],
  }),
  loadingicon: ({ props }) => ({
    class: [
      'h-3 w-3',
      'mx-0',
      {
        'mr-2': props.iconPos === 'left' && props.label != null,
        'ml-2 order-1': props.iconPos === 'right' && props.label != null,
        'mb-2': props.iconPos === 'top' && props.label != null,
        'mt-2': props.iconPos === 'bottom' && props.label != null,
      },
      'animate-spin',
    ],
  }),
  badge: ({ props }) => ({
    class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }],
  }),
}
