def romanToInt(s):
        result = 0
        dictionary = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        for i in range(0, len(s) - 1):
            current = s[i]
            next = s[i + 1]
            if dictionary[current] < dictionary[next]:
                result -= dictionary[current]
                
            else:
                result += dictionary[current]

        return result + dictionary[s[-1]]

romanToInt('III')
romanToInt('IV')
romanToInt('IX')
romanToInt('LVIII')