FROM microsoft/dotnet:2.2-sdk AS build-env
WORKDIR /project/todo-api

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /project/todo-api

COPY --from=build-env /project/todo-api/out .
CMD dotnet TodoApi.dll --urls "http://*:$PORT"

