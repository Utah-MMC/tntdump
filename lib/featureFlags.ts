// Simple feature flags to allow instant reverts without code deletion
// Toggle flags here or via env vars in the future

export const featureFlags = {
	calculatorV2: false,
}

export function isEnabled(flag: keyof typeof featureFlags): boolean {
	return featureFlags[flag]
}


