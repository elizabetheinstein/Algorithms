def underscorifySubstring(string, substring):
    locations = collapse(get_locations(string, substring))
    return underscorify(string, locations)


def get_locations(string, substring):
    locations = []
    start_idx = 0
    while start_idx < len(string):
        next_idx = string.find(substring, start_idx)
        if next_idx != -1:
            locations.append([next_idx, next_idx + len(substring)])
            start_idx = next_idx + 1
        else:
            break
    return locations


def collapse(locations):
    if not len(locations):
        return locations
    new_locations = [locations[0]]
    previous = new_locations[0]
    for i in range(1, len(locations)):
        current = locations[i]
        if current[0] <= previous[1]:
            previous[1] = current[1]
        else:
            new_locations.append(current)
            previous = current
    return new_locations


def underscorify(string, locations):
    locations_idx = 0
    string_idx = 0
    in_between_underscores = False
    final_chars = []
    i = 0
    while string_idx < len(string) and locations_idx < len(locations):
        if string_idx == locations[locations_idx][i]:
            final_chars.append("_")
            in_between_underscores = not in_between_underscores
            if not in_between_underscores:
                locations_idx += 1
            i = 0 if i == 1 else 1
        final_chars.append(string[string_idx])
        string_idx += 1
    if locations_idx < len(locations):
        final_chars.append("_")
    elif string_idx < len(string):
        final_chars.append(string[string_idx:])
    return "".join(final_chars)

