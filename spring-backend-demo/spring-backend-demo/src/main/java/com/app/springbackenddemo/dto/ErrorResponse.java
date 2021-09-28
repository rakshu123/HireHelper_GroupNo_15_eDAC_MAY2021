package com.app.springbackenddemo.dto;

import java.time.LocalDateTime;

public class ErrorResponse {
	
	private String message;
	private String errorDetails;
	private LocalDateTime timeStamp;
  
	public ErrorResponse() {}

	public ErrorResponse(String message, String errorDetails, LocalDateTime timeStamp) {
		super();
		this.message = message;
		this.errorDetails = errorDetails;
		this.timeStamp = timeStamp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getErrorDetails() {
		return errorDetails;
	}

	public void setErrorDetails(String errorDetails) {
		this.errorDetails = errorDetails;
	}

	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}

	@Override
	public String toString() {
		return "ErrorResponse [message=" + message + ", errorDetails=" + errorDetails + ", timeStamp=" + timeStamp
				+ "]";
	}
	

}
