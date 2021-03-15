import '@testing-library/jest-dom/extend-expect';
import { matchers, createSerializer } from '@emotion/jest';
import * as emotion from '@emotion/react';

// @ts-ignore
expect.extend(matchers);
// @ts-ignore
expect.addSnapshotSerializer(createSerializer(emotion));
