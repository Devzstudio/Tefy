# Tefy

Tefy generates template file with strings replaced.

#  🛠 Installation

```
npm i -g tefy
```

# 👨‍💻 Example:

```
tefy --template="./templates/Table.tsx" --output="./components/table/UsersTable.tsx" --COMPONENTNAME=UsersTable
```

# ⚙️ Options

--template Template file to select
--output Output file location

Other arguments that you pass will be searched on the template file and replace it with the new value. You can set {{COMPONENTNAME}} on the template file and pass --COMPONENTNAME=value via the CLI.
