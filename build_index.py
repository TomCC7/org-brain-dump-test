import os
import json

index:list[dict] = []
for fname in os.listdir("./public"):
    fdict:dict = {"name": fname[:-4]}
    with open(os.path.join("./public", fname)) as f:
        fdict["text"] = f.read()
    
    index.append(fdict)

with open("index.json", "w") as f:
    json.dump(index, f)