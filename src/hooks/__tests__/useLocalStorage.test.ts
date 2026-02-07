import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with default value', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    expect(result.current[0]).toBe('default');
  });

  it('should update localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('updated'));
  });

  it('should load existing value from localStorage', () => {
    localStorage.setItem('test-key', JSON.stringify('existing'));

    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    expect(result.current[0]).toBe('existing');
  });

  it('should handle complex objects', () => {
    const testObject = { name: 'test', value: 123 };
    const { result } = renderHook(() => useLocalStorage('test-obj', testObject));

    expect(result.current[0]).toEqual(testObject);

    act(() => {
      result.current[1]({ name: 'updated', value: 456 });
    });

    expect(result.current[0]).toEqual({ name: 'updated', value: 456 });
  });
});
