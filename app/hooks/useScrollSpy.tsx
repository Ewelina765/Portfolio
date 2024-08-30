import { useEffect, useState } from 'react';

interface ScrollSpyOptions extends IntersectionObserverInit {
  rootMargin?: string;
  threshold?: number | number[];
}

type UseScrollSpy = (sectionIds: string[], options?: ScrollSpyOptions) => string;

const useScrollSpy: UseScrollSpy = (sectionIds, options = {}) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds, options]);

  return activeId;
};

export default useScrollSpy;
