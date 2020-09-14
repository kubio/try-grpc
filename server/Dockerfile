FROM golang:1.14.9-alpine

ENV GO111MODULE=on

WORKDIR /go/src/try-grpc

RUN apk add --no-cache --update \
  git

RUN go get github.com/pilu/fresh
