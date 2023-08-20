
# Remove windows path variables
[interop]
appendWindowsPath = false


# other paths you want to add can ba done using a ~/.bash_path (should be created and loaded on to ~/.bashrc)
#ex:
export PATH="$PATH:/mnt/c/Users/OM/AppData/Local/Programs/Microsoft VS Code/bin"

# update the folder shown on command line (before $)
export PS1='\e[0;33m[\u] ${PWD#"${PWD%/*}/"} \e[0m-> ';