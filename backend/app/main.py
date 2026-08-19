from fastapi import FastAPI

app = FastAPI(
    title="Campus Security Incident Reporting System",
    description="Backend API for the University of Ghana Campus Security Incident Reporting and Management System",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "Campus Security Incident Reporting System API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }