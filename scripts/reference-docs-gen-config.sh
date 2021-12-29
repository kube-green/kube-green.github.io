#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

REPO_ROOT="$(pwd)"

if ! command -v go &>/dev/null; then
    echo "Ensure go command is installed"
    exit 1
fi

tmpdir="$(mktemp -d)"
cleanup() {
	export GO111MODULE="auto"
	echo "--- Cleaning up temporary GOPATH ---"
	go clean -modcache
	rm -rf "${tmpdir}"
}
trap cleanup EXIT

# Create temporary go envs
export GO111MODULE="on"
export GOPATH="${tmpdir}/go"
export GOROOOT="$(go env GOROOT)"
export GOBIN="${tmpdir}/bin"
go install github.com/ahmetb/gen-crd-api-reference-docs@v0.3.0

mkdir -p ${GOPATH}/src/github.com/kube-green
gitdir="${GOPATH}/src/github.com/kube-green/kube-green"
git clone --depth 1 "git@github.com:kube-green/kube-green.git" "${gitdir}"
cd "${gitdir}"

generate_reference_docs() {
  apiversion="$1"
  echo "--- Generating reference docs ---"
  "${GOBIN}/gen-crd-api-reference-docs" \
    -api-dir "./api/${apiversion}" \
    -out-file "${REPO_ROOT}/docs/apireference_${apiversion}.md" \
    -config "${REPO_ROOT}/scripts/api-reference/config.json" \
    -template-dir "${REPO_ROOT}/scripts/api-reference/templates"
  echo "--- Done generating reference docs ---"
}

generate_reference_docs "v1alpha1"
