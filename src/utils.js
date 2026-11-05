
/**
 * Clamps a value between a minimum and maximum value.
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The clamped value.
 */
function clamp (value, min, max) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Linearly interpolates between two values.
 * @param {number} a - The start value.
 * @param {number} b - The end value.
 * @param {number} t - The interpolation factor (0 to 1).
 * @returns {number} - The interpolated value.
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}

/**
 * Computes the modulo of a number, ensuring a positive result.
 * @param {number} a - The number to modulo.
 * @param {number} n - The modulus.
 * @returns {number} - The positive modulo result.
 */
function mod(a, n) {
    return ((a % n) + n) % n;
}