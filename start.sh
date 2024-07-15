#!/bin/bash

set -e

start_service() {
    local service_path=$1
    local service_name=$(basename "$service_path")

    echo "Starting $service_name..."
    cd "$service_path"
    ./gradlew bootRun > "../logs/$service_name.log" 2>&1 &
    local service_pid=$!
    echo "$service_name (PID $service_pid) is running..."
    echo "$service_pid" > "../pids/$service_name.pid"
    cd - > /dev/null
}

start_frontend() {
    echo "Starting frontend..."
    cd "frontend"
    npm install
    npm start > "../logs/frontend.log" 2>&1 &
    local frontend_pid=$!
    echo "Frontend (PID $frontend_pid) is running..."
    echo "$frontend_pid" > "../pids/frontend.pid"
    cd - > /dev/null
}

cleanup() {
    echo "Stopping all services and frontend..."
    kill $(jobs -p) >/dev/null 2>&1 || true
    wait
    echo "All services and frontend are stopped"
}

mkdir -p logs pids

start_service "auth-service"
start_service "task-service"
start_service "user-service"
start_service "notification-service"

start_frontend

echo "All services and frontend are started"

trap cleanup EXIT

wait