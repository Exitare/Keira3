import os
import json
from pathlib import Path

def get_keys_from_en(en_file):
    with open(en_file, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    return set(en_data.keys()), en_data

def sync_keys(translations_dir, en_file):
    en_keys, en_data = get_keys_from_en(en_file)

    for file in os.listdir(translations_dir):
        if file.endswith('.json') and file != os.path.basename(en_file):
            file_path = os.path.join(translations_dir, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)

            # Remove additional keys
            keys_to_remove = set(data.keys()) - en_keys
            for key in keys_to_remove:
                del data[key]

            # Add missing keys with default empty values
            keys_to_add = en_keys - set(data.keys())
            for key in keys_to_add:
                data[key] = en_data[key]  # Use the value from `en.json`

            # Save updated file without escaping Unicode
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)

            print(f"Synced {file}: Removed {len(keys_to_remove)} keys, Added {len(keys_to_add)} keys")

if __name__ == "__main__":
    translations_dir = Path("apps", "keira", "src", "assets", "i18n")  # Update to your directory
    en_file = translations_dir / "en.json"
    sync_keys(translations_dir, en_file)
