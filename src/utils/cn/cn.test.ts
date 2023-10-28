import { describe, expect, it } from 'vitest';
import { cn } from '.';

describe('cn', () => {
	it('should combine class names correctly', () => {
		const result = cn('w-1/2', 'text-red-500', {
			'text-blue-500': true,
		});

		expect(result).toBe('w-1/2 text-blue-500');
	});
});
