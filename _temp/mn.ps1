# manage note

function ShowHelp {
    $script = ".\mn.ps1"
    Write-Host "$script serve"
    Write-Host "Start jekyll"
    Write-Host
    Write-Host "$script reinit"
    Write-Host "Init the repo again. Notice: the history is totally discarded!"
    Write-Host
    Write-Host "$script lint"
    Write-Host "Lint markdown files"
}

function Toggle([bool]$local) {
    $file = ".\_config.yml"
    $s1 = '# github:'
    $s2 = 'github:'

    Get-Content $file | ForEach-Object {
        if ($local) {
            $_ -replace
        } else {
            $_ -replace
        }
    } | Set-Content $file
}

function Serve() {
    Toggle $true
    # bundle exec rougify list > ./_temp/rougify.txt
    bundle exec jekyll clean
    bundle exec jekyll serve
}

function Reinit() {
    Remove-Item ".git" -Recurse -Force
    git init
    git remote add origin "git@github.com:yanxyz/note.git"
    Toggle $false
    git add .
    git commit -m "init afresh"
    git push --force --set-upstream origin master
}

function Lint {

}

Set-Location $PSScriptRoot

if ($args.Length -eq 0) {
    ShowHelp
    exit
}

$command = $args[0]
$methods = "serve","reinit","lint"
if ($methods.Contains($command)) {
    Invoke-Expression $command $args
} else {
    ShowHelp
    exit
}
