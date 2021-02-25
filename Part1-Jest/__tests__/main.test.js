const formatVolumeIconPath  = require('../assets/scripts/main');

describe('Main test group', () => {
    test('Icon Level 3 Volume', () => {
        expect(formatVolumeIconPath (67))
            .toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('Icon Level 2 Volume', () => {
        expect(formatVolumeIconPath (34))
            .toMatch('./assets/media/icons/volume-level-2.svg');
    });
    test('Icon Level 1 Volume', () => {
        expect(formatVolumeIconPath (1))
            .toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('Icon Level 0 Volume', () => {
        expect(formatVolumeIconPath (0))
            .toMatch('./assets/media/icons/volume-level-0.svg');
    });
});