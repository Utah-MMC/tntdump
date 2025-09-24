"use client"

import DumpsterCalculatorV2 from './DumpsterCalculatorV2'
import Legacy from './DumpsterCalculatorLegacy'
import { isEnabled } from '@/lib/featureFlags'

export default function DumpsterCalculator() {
	return isEnabled('calculatorV2') ? <DumpsterCalculatorV2 /> : <Legacy />
}

