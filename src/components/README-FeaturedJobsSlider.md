# FeaturedJobsSlider Component

A React component that creates a beautiful slider for displaying featured job listings fetched from Greenhouse.

## Features

- 🎯 **Easy Integration**: Simply provide a comma-separated list of job IDs
- 🎨 **Beautiful Design**: Modern card-based design with smooth animations
- 🚀 **Auto-play Support**: Optional auto-playing with customizable intervals
- 🎮 **Interactive Controls**: Navigation arrows and dot indicators
- 📱 **Responsive**: Works great on all device sizes
- ♿ **Accessible**: Proper ARIA labels and keyboard navigation
- 🔄 **Real-time Data**: Fetches live job data from Greenhouse API

## Usage

### Basic Usage

```tsx
import { FeaturedJobsSlider } from "./components/FeaturedJobsSlider";

function MyComponent() {
  return (
    <FeaturedJobsSlider
      jobIds="123456,789012,345678"
      ghSlug="webflow"
      title="Featured Openings"
    />
  );
}
```

### Advanced Usage

```tsx
<FeaturedJobsSlider
  jobIds="123456,789012,345678,901234"
  ghSlug="your-company"
  title="Join Our Team"
  autoPlay={true}
  autoPlayInterval={4000}
  showArrows={true}
  className="my-custom-class"
/>
```

## Props

| Prop               | Type      | Default           | Description                                     |
| ------------------ | --------- | ----------------- | ----------------------------------------------- |
| `jobIds`           | `string`  | **Required**      | Comma-separated list of job IDs from Greenhouse |
| `ghSlug`           | `string`  | `"webflow"`       | Greenhouse board slug for your organization     |
| `className`        | `string`  | `""`              | Additional CSS classes for styling              |
| `title`            | `string`  | `"Featured Jobs"` | Title displayed above the slider                |
| `showArrows`       | `boolean` | `true`            | Whether to show navigation arrows               |
| `autoPlay`         | `boolean` | `false`           | Enable automatic sliding                        |
| `autoPlayInterval` | `number`  | `5000`            | Auto-play interval in milliseconds              |

## Job Card Features

Each job card displays:

- **Department Badge**: Shows the job's department
- **Job Title**: Full job title with proper truncation
- **Location**: Job location with location icon
- **Description Preview**: Truncated job description (HTML stripped)
- **View Details Button**: Links to the full job posting

## Styling

The component uses Tailwind CSS classes and follows the existing design system. It includes:

- Smooth transitions and hover effects
- Responsive design that works on all screen sizes
- Consistent spacing and typography
- Accessible color contrast
- Loading and error states

## Error Handling

The component gracefully handles:

- Invalid job IDs
- Network errors
- Missing job data
- Empty job lists

## Accessibility

- Proper ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators

## Dependencies

- React 18+
- Tailwind CSS
- Existing Greenhouse API integration

## Example Integration

See `FeaturedJobsExample.tsx` for complete usage examples with different configurations.

## Getting Job IDs

To get job IDs from Greenhouse:

1. Go to your Greenhouse board
2. Click on a job posting
3. The job ID is in the URL: `https://boards.greenhouse.io/yourcompany/jobs/123456`
4. Use `123456` as the job ID

## Customization

You can customize the appearance by:

1. Modifying the Tailwind classes in the component
2. Adding custom CSS classes via the `className` prop
3. Overriding the default styles in your global CSS

## Performance

- Jobs are fetched in parallel for optimal performance
- Smooth animations use CSS transforms for hardware acceleration
- Auto-play is automatically paused when user interacts with the slider
- Efficient re-renders with proper React hooks usage
