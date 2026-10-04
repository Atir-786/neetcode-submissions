class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length > s.length) return "";

        // Frequency required from t
        let map = new Map<string, number>();

        for (let i = 0; i < t.length; i++) {
            if (map.has(t[i])) {
                map.set(t[i], map.get(t[i])! + 1);
            } else {
                map.set(t[i], 1);
            }
        }

        let window = new Map<string, number>();

        let l = 0;
        let r = 0;

        let need = map.size;
        let formed = 0;

        let resultL = 0;
        let resultR = 0;
        let resultLen = Infinity;

        while (r < s.length) {

            // Add s[r] to window
            if (window.has(s[r])) {
                window.set(s[r], window.get(s[r])! + 1);
            } else {
                window.set(s[r], 1);
            }

            // Character requirement just became satisfied
            if (
                map.has(s[r]) &&
                window.get(s[r]) === map.get(s[r])
            ) {
                formed++;
            }

            // Current window is valid
            while (formed === need) {

                // Save smallest window
                let currentLen = r - l + 1;

                if (currentLen < resultLen) {
                    resultLen = currentLen;
                    resultL = l;
                    resultR = r;
                }

                // Remove s[l]
                if (
                    map.has(s[l]) &&
                    window.get(s[l])! <= map.get(s[l])!
                ) {
                    formed--;
                }

                let count = window.get(s[l])!;

                if (count > 1) {
                    window.set(s[l], count - 1);
                } else {
                    window.delete(s[l]);
                }

                l++;
            }

            r++;
        }

        // No valid window found
        if (resultLen === Infinity) {
            return "";
        }

        let result = "";

        for (let i = resultL; i <= resultR; i++) {
            result += s[i];
        }

        return result;
    }
}