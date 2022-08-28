#!/bin/bash
set -- $(locale LC_MESSAGES)
yesexpr="$1"; noexpr="$2"; yesword="$3"; noword="$4"

DASH=----------------------------------------------------------------------------------

echo $DASH

configure () {
  while true; do
    read -p "Would you like to $1 (Y/n): " yn
    if [[ "$yn" =~ $yesexpr ]]; 
    then
      echo "🔳 $2"
      git merge -X ours $3 --no-edit
      pnpm install
      git add .
      git commit --amend --no-edit
      echo "✅ $2 - Done!"
      echo $DASH
      break;
    fi
    if [[ "$yn" =~ $noexpr ]]; 
    then 
      echo "❌ Skipping $3"
      echo $DASH
      break; 
    fi
    echo "Please answer y or n."
  done
}

configure "enable partytown and google analytics" "Setting up partytown" "partytown"
configure "install react-aria and react-stately: " "Setting up react-aria and react-stately" "react-aria"
configure "add tailwindcss: " "Setting up tailwindcss" "tailwindcss"
configure "add firebase: " "Setting up firebase" "firebase"

git branch | grep -v "main" | xargs git branch -D

sed '6d' package.json >> new-package.json
rm package.json
mv new-package.json package.json
git add .
git commit --amend --no-edit

rm meeseeks.sh
