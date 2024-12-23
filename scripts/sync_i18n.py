import os
import json
from pathlib import Path

def get_keys_from_en(en_file):
    with open(en_file, 'r') as f:
        data = json.load(f)
    return set(data.keys()), data

def sync_keys(translations_dir, en_file):
    en_keys, en_data = get_keys_from_en(en_file)

    for file in os.listdir(translations_dir):
        if file.endswith('.json') and file != os.path.basename(en_file):
            file_path = os.path.join(translations_dir, file)
            with open(file_path, 'r') as f:
                data = json.load(f)

            # Remove additional keys
            keys_to_remove = set(data.keys()) - en_keys
            for key in keys_to_remove:
                del data[key]

            # Add missing keys
            keys_to_add = en_keys - set(data.keys())
            for key in keys_to_add:
                data[key] = ""  # Add with an empty value

            # Save updated file
            with open(file_path, 'w') as f:
                json.dump(data, f, indent=2)
            print(f"Synced {file}: Removed {len(keys_to_remove)} keys, Added {len(keys_to_add)} keys")

if __name__ == "__main__":
    translations_dir = Path("apps", "keira", "src", "assets", "i18n")  # Update to your directory
    en_file = Path(translations_dir, "en.json")
    sync_keys(translations_dir, en_file)
