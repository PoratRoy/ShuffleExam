# Query Parameter Support

## Overview
The ShuffleExam app now supports URL query parameters to track and share the current exam type. This allows users to bookmark specific exam types and share direct links to Java or Statistics exams.

## Usage

### URL Format
```
https://your-domain.com/?exam=<exam-type>
```

### Supported Parameters
- `exam=java` - Load Java programming exam
- `exam=statistics` - Load Statistics exam (Hebrew)

### Examples
```
https://localhost:3000/                    # Defaults to Java exam
https://localhost:3000/?exam=java          # Explicit Java exam
https://localhost:3000/?exam=statistics    # Statistics exam
https://localhost:3000/?exam=invalid       # Falls back to Java exam
```

## Features

### 🔗 **URL Synchronization**
- Current exam type is always reflected in the URL
- Switching exam types updates the URL automatically
- Browser back/forward buttons work correctly
- URLs can be bookmarked and shared

### 🛡️ **Validation & Fallback**
- Invalid exam types fall back to "java" (default)
- Case-sensitive validation (only lowercase accepted)
- Null/empty parameters default to "java"
- Graceful handling of malformed URLs

### 📱 **User Experience**
- No page reload when switching exam types
- URL updates use `router.replace()` to avoid cluttering browser history
- Smooth transitions between exam types
- Loading states during initialization

## Technical Implementation

### Components
1. **useExamTypeQuery Hook**: Manages URL query parameter synchronization
2. **ExamProvider**: Enhanced to accept `onExamTypeChange` callback
3. **Page Component**: Wrapped with Suspense for proper Next.js handling

### Key Functions
```typescript
// Validate exam type
isValidExamType(value: string | null): value is ExamType

// Get valid exam type with fallback
getValidExamType(value: string | null, defaultType?: ExamType): ExamType

// Custom hook for query management
useExamTypeQuery(defaultExamType?: ExamType)
```

### State Flow
1. **Page Load**: URL is parsed to determine initial exam type
2. **User Action**: User clicks exam type in navbar
3. **Context Update**: ExamContext switches exam type and questions
4. **URL Update**: Query parameter is updated via callback
5. **State Sync**: All components reflect the new exam type

## Integration with Existing Features

### 🔄 **Exam Switching**
- Navbar buttons trigger exam type changes
- URL automatically updates to reflect selection
- Exam state is properly reset (questions, answers, results)
- Linked questions logic is preserved

### 📊 **Question Management**
- Question selection respects the exam type from URL
- Shuffle functionality works with URL-specified exam type
- Linked questions are handled correctly across exam types

### 🖼️ **Image Support**
- Images load correctly regardless of URL entry point
- Missing images are handled gracefully
- Image paths are resolved properly for each exam type

## Browser Compatibility

### Supported Features
- ✅ Modern browsers with Next.js router support
- ✅ Browser back/forward navigation
- ✅ Bookmark and share functionality
- ✅ Direct URL access to specific exam types

### Fallback Behavior
- Invalid parameters default to Java exam
- Missing parameters default to Java exam
- Malformed URLs are handled gracefully
- No JavaScript errors for edge cases

## Development Notes

### Next.js Integration
- Uses `useSearchParams`, `useRouter`, and `usePathname` hooks
- Wrapped with `Suspense` for proper SSR handling
- Client-side navigation for smooth UX

### Performance Considerations
- URL updates use `replace()` instead of `push()` to avoid history pollution
- Minimal re-renders when switching exam types
- Efficient query parameter parsing and validation

## Future Enhancements

### Potential Additions
1. **Additional Parameters**: Question count, difficulty level, etc.
2. **Deep Linking**: Direct links to specific questions
3. **Session Persistence**: Remember exam progress across page reloads
4. **Analytics**: Track exam type usage patterns

### URL Structure Ideas
```
/?exam=java&count=15&difficulty=hard
/?exam=statistics&questions=1,5,10
/?exam=java&session=abc123
```

## Testing

### Manual Testing
1. Navigate to `/?exam=java` - should load Java exam
2. Navigate to `/?exam=statistics` - should load Statistics exam
3. Navigate to `/?exam=invalid` - should default to Java exam
4. Switch exam types via navbar - URL should update
5. Use browser back/forward - should work correctly

### Automated Testing
- Test utilities available in `src/utils/testQueryParams.ts`
- Validation function tests
- URL parsing scenario tests
