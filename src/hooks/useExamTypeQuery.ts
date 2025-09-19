'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { ExamType, getValidExamType } from '@/models/types/exam';

/**
 * Custom hook to manage exam type in URL query parameters
 */
export function useExamTypeQuery(defaultExamType: ExamType = 'java') {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [examType, setExamTypeState] = useState<ExamType>(() => {
    // Initialize from URL on first load
    const queryExamType = searchParams.get('exam');
    return getValidExamType(queryExamType, defaultExamType);
  });

  // Get exam type from URL query parameter
  const getExamTypeFromQuery = useCallback((): ExamType => {
    const queryExamType = searchParams.get('exam');
    return getValidExamType(queryExamType, defaultExamType);
  }, [searchParams, defaultExamType]);

  // Update URL with new exam type
  const updateExamTypeInUrl = useCallback((newExamType: ExamType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('exam', newExamType);
    
    // Use replace to avoid adding to browser history for every exam type change
    router.replace(`${pathname}?${params.toString()}`);
  }, [searchParams, router, pathname]);

  // Set exam type and update URL
  const setExamType = useCallback((newExamType: ExamType) => {
    setExamTypeState(newExamType);
    updateExamTypeInUrl(newExamType);
  }, [updateExamTypeInUrl]);

  // Sync with URL changes (for browser back/forward)
  useEffect(() => {
    const queryExamType = getExamTypeFromQuery();
    if (queryExamType !== examType) {
      setExamTypeState(queryExamType);
    }
    
    // If URL doesn't have exam parameter, add it
    if (!searchParams.get('exam')) {
      updateExamTypeInUrl(queryExamType);
    }
  }, [searchParams, getExamTypeFromQuery, updateExamTypeInUrl, examType]);

  return {
    examType,
    setExamType,
    isReady: true // Always ready since we have a default
  };
}
