const scenarios = {

  theft: {
  question: "Did you take someone else's property?",

  yes: {
    question: "Did the owner give you permission?",

    yes: {
      result: "No Theft",
      risk: "Low",
      message: "Since the owner gave you permission, this is generally not considered theft.",
      actions: [
        "No legal action is required.",
        "Keep proof of permission if needed."
      ]
    },

    no: {
      question: "Did you intend to keep the property permanently?",

      yes: {
        result: "Possible Theft",
        risk: "High",
        message: "Taking someone else's property without permission may be considered theft under the law.",
        actions: [
          "Return the property if possible.",
          "Seek legal advice if a complaint has been filed.",
          "Cooperate with the authorities if questioned."
        ]
      },

      no: {
        result: "Needs Further Review",
        risk: "Medium",
        message: "Your intention should be examined before determining whether theft has occurred.",
        actions: [
          "Explain the circumstances clearly.",
          "Provide any available evidence."
        ]
      }
    }
  },

  no: {
    result: "No Theft",
    risk: "Low",
    message: "Based on your responses, no theft appears to have occurred.",
    actions: [
      "No further legal action is required."
    ]
  }
},
roadCrossing: {
  question: "Did you look both ways before crossing the road?",

  yes: {
    question: "Did you use the zebra crossing or pedestrian crossing?",

    yes: {
      question: "Did you wait for the pedestrian signal or make sure it was safe to cross?",

      yes: {
        result: "Safe Road Crossing",
        risk: "Low",
        message: "You followed important road safety rules while crossing the road.",
        actions: [
          "Continue following traffic rules.",
          "Stay alert for moving vehicles.",
          "Help children and elderly people cross safely."
        ]
      },

      no: {
        result: "Minor Safety Risk",
        risk: "Medium",
        message: "Although you used the crossing, you should always ensure it is safe before crossing.",
        actions: [
          "Wait for the pedestrian signal whenever available.",
          "Avoid distractions such as using your phone while crossing."
        ]
      }
    },

    no: {
      result: "Unsafe Crossing",
      risk: "Medium",
      message: "Crossing outside the designated pedestrian crossing increases the risk of accidents.",
      actions: [
        "Use zebra crossings whenever possible.",
        "Be cautious of approaching vehicles."
      ]
    }
  },

  no: {
    question: "Was the road completely clear before you crossed?",

    yes: {
      result: "Risky Behaviour",
      risk: "Medium",
      message: "Although no vehicles were nearby, you should always check both directions before crossing.",
      actions: [
        "Always look left and right before crossing.",
        "Avoid rushing across the road."
      ]
    },

    no: {
      result: "High Accident Risk",
      risk: "High",
      message: "Crossing the road without checking for traffic could lead to a serious accident.",
      actions: [
        "Always stop and check for vehicles.",
        "Use pedestrian crossings whenever available.",
        "Follow traffic signals."
      ]
    }
  }
},
cyberFraud: {
  question: "Did you receive a suspicious email, SMS, or message with a link?",

  yes: {
    question: "Did you click on the suspicious link?",

    yes: {
      question: "Did you enter your bank account, card, OTP, or password?",

      yes: {
        result: "Possible Cyber Fraud",
        risk: "High",
        message: "Your sensitive information may have been compromised.",
        actions: [
          "Immediately block your debit/credit card.",
          "Change your banking and email passwords.",
          "Report the incident to your bank.",
          "File a complaint on the National Cyber Crime Portal.",
          "Monitor your bank account for unauthorized transactions."
        ]
      },

      no: {
        result: "Suspicious Activity",
        risk: "Medium",
        message: "Although you clicked the link, you did not share sensitive information.",
        actions: [
          "Run an antivirus scan on your device.",
          "Delete the suspicious message.",
          "Change important passwords as a precaution."
        ]
      }
    },

    no: {
      result: "Safe",
      risk: "Low",
      message: "You identified the suspicious message and avoided interacting with it.",
      actions: [
        "Delete the message.",
        "Report it as spam or phishing.",
        "Stay alert for similar scams."
      ]
    }
  },

  no: {
    question: "Did you verify the sender before opening the message?",

    yes: {
      result: "Safe Online Practice",
      risk: "Low",
      message: "Verifying unknown messages helps protect you from online fraud.",
      actions: [
        "Continue verifying unknown senders.",
        "Never share OTPs or passwords with anyone."
      ]
    },

    no: {
      result: "Be More Careful",
      risk: "Medium",
      message: "Always verify unknown messages before opening links or attachments.",
      actions: [
        "Check the sender's identity.",
        "Avoid clicking unknown links.",
        "Enable two-factor authentication."
      ]
    }
  }
},
robbery: {
  question: "Did someone take your property by using force or threatening you?",

  yes: {
    question: "Was a weapon used or shown during the incident?",

    yes: {
      question: "Did you suffer any physical injuries?",

      yes: {
        result: "Armed Robbery with Injury",
        risk: "High",
        message: "This appears to be a serious robbery involving a weapon and physical harm. Immediate police assistance is recommended.",
        actions: [
          "Call the police immediately.",
          "Seek medical treatment.",
          "Preserve CCTV footage or photographs.",
          "Provide a detailed description of the suspect."
        ]
      },

      no: {
        result: "Armed Robbery",
        risk: "High",
        message: "A weapon was involved, making this a serious criminal offence.",
        actions: [
          "Report the incident immediately.",
          "Avoid confronting the suspect.",
          "Collect witness information if available."
        ]
      }
    },

    no: {
      result: "Robbery",
      risk: "High",
      message: "Your property appears to have been taken using force or intimidation.",
      actions: [
        "Report the incident to the nearest police station.",
        "Provide details of the stolen property.",
        "Collect any available evidence."
      ]
    }
  },

  no: {
    question: "Was your property taken without your knowledge or permission?",

    yes: {
      result: "Possible Theft",
      risk: "Medium",
      message: "Since no force was used, this may be a theft rather than a robbery.",
      actions: [
        "Report the theft.",
        "Check nearby CCTV cameras.",
        "Prepare a list of stolen items."
      ]
    },

    no: {
      result: "No Robbery",
      risk: "Low",
      message: "Based on your answers, this does not appear to be a robbery.",
      actions: [
        "No immediate legal action is suggested.",
        "Seek legal advice if more information becomes available."
      ]
    }
  }
},
assault: {
  question: "Were you physically attacked by another person?",

  yes: {
    question: "Did you suffer any physical injuries?",

    yes: {
      question: "Did you receive medical treatment for your injuries?",

      yes: {
        result: "Serious Assault",
        risk: "High",
        message: "Based on your responses, this appears to be a serious assault that may require legal investigation.",
        actions: [
          "Seek immediate medical attention if necessary.",
          "Report the incident to the nearest police station.",
          "Keep medical reports as evidence.",
          "Collect witness details and CCTV footage if available."
        ]
      },

      no: {
        result: "Assault",
        risk: "High",
        message: "Physical injuries were reported. Even without medical treatment, the incident should be documented.",
        actions: [
          "Visit a doctor to document your injuries.",
          "File a police complaint.",
          "Preserve any photographs or evidence."
        ]
      }
    },

    no: {
      result: "Minor Physical Assault",
      risk: "Medium",
      message: "Although no visible injuries were reported, physical force may still constitute assault.",
      actions: [
        "Record the incident.",
        "Gather witness information.",
        "Consider filing a police complaint."
      ]
    }
  },

  no: {
    question: "Were you threatened with physical violence?",

    yes: {
      result: "Possible Criminal Intimidation",
      risk: "Medium",
      message: "Threatening someone with violence may be a criminal offence even if no physical attack occurred.",
      actions: [
        "Keep any messages or recordings as evidence.",
        "Report repeated threats to the police.",
        "Avoid confronting the individual."
      ]
    },

    no: {
      result: "No Assault Detected",
      risk: "Low",
      message: "Based on your responses, this situation does not appear to involve assault.",
      actions: [
        "No immediate legal action appears necessary."
      ]
    }
  }
},
kidnapping: {
  question: "Was someone taken to another location against their will?",

  yes: {
    question: "Was the person under 18 years of age?",

    yes: {
      question: "Has the incident been reported to the police?",

      yes: {
        result: "Reported Kidnapping of a Minor",
        risk: "High",
        message: "A minor has been taken without consent, and the matter has been reported. Continue cooperating with the authorities.",
        actions: [
          "Provide recent photographs of the child.",
          "Share the last known location and time.",
          "Cooperate fully with the police investigation.",
          "Inform family members and emergency contacts."
        ]
      },

      no: {
        result: "Urgent Kidnapping Case",
        risk: "High",
        message: "A minor may have been kidnapped. Immediate police intervention is essential.",
        actions: [
          "Call the police immediately.",
          "Do not delay reporting the incident.",
          "Provide all available information about the child.",
          "Preserve CCTV footage if available."
        ]
      }
    },

    no: {
      question: "Was force, threats, or deception used to take the person?",

      yes: {
        result: "Possible Kidnapping or Abduction",
        risk: "High",
        message: "The person appears to have been taken against their will.",
        actions: [
          "Report the incident immediately.",
          "Collect witness information.",
          "Provide vehicle or suspect details if known."
        ]
      },

      no: {
        result: "Further Investigation Needed",
        risk: "Medium",
        message: "More information is required to determine whether a criminal offence has occurred.",
        actions: [
          "Verify the person's whereabouts.",
          "Contact friends or relatives.",
          "Seek police assistance if concerns continue."
        ]
      }
    }
  },

  no: {
    question: "Did the person leave voluntarily?",

    yes: {
      result: "No Kidnapping",
      risk: "Low",
      message: "Based on your responses, the person appears to have left voluntarily.",
      actions: [
        "No criminal offence appears to have occurred.",
        "Maintain communication with the individual."
      ]
    },

    no: {
      result: "Missing Person Investigation",
      risk: "Medium",
      message: "The circumstances are unclear and should be investigated further.",
      actions: [
        "Report the missing person to the police.",
        "Share recent photographs.",
        "Inform close relatives and friends."
      ]
    }
  }
},
domesticViolence: {
  question: "Have you experienced physical violence from a family member or partner?",

  yes: {
    question: "Did the incident cause any physical injuries?",

    yes: {
      question: "Did you receive medical treatment for your injuries?",

      yes: {
        result: "Serious Domestic Violence",
        risk: "High",
        message: "Based on your responses, this appears to be a serious case of domestic violence requiring immediate attention.",
        actions: [
          "Contact the police immediately.",
          "Keep copies of your medical records.",
          "Document any injuries with photographs.",
          "Reach out to a trusted family member or support organization."
        ]
      },

      no: {
        result: "Domestic Violence",
        risk: "High",
        message: "Physical abuse has been reported. Seeking medical care and legal assistance is strongly recommended.",
        actions: [
          "Visit a hospital or healthcare provider.",
          "File a police complaint.",
          "Preserve evidence such as messages or photographs."
        ]
      }
    },

    no: {
      result: "Physical Abuse Reported",
      risk: "Medium",
      message: "Even without visible injuries, physical abuse is a serious matter.",
      actions: [
        "Record the date and details of each incident.",
        "Speak with a trusted person.",
        "Consider contacting the police or a legal aid service."
      ]
    }
  },

  no: {
    question: "Have you experienced repeated verbal threats, emotional abuse, or controlling behaviour?",

    yes: {
      question: "Has this behaviour continued for a long period?",

      yes: {
        result: "Possible Emotional Domestic Abuse",
        risk: "Medium",
        message: "Repeated emotional abuse or controlling behaviour may require legal or professional support.",
        actions: [
          "Keep records of threatening messages or incidents.",
          "Speak with a counsellor or support organization.",
          "Seek legal advice if you feel unsafe."
        ]
      },

      no: {
        result: "Early Warning Signs",
        risk: "Low",
        message: "Your responses suggest possible unhealthy behaviour that should not be ignored.",
        actions: [
          "Talk to someone you trust.",
          "Monitor the situation carefully.",
          "Seek professional advice if the behaviour continues."
        ]
      }
    },

    no: {
      result: "No Domestic Violence Detected",
      risk: "Low",
      message: "Based on your responses, no signs of domestic violence were identified.",
      actions: [
        "Continue maintaining healthy and respectful relationships."
      ]
    }
  }
},
cheating: {
  question: "Did someone make a false promise to convince you to give money or valuable property?",

  yes: {
    question: "Did you lose money or valuable property because of that promise?",

    yes: {
      question: "Do you have any evidence such as messages, emails, receipts, or bank transaction records?",

      yes: {
        result: "Possible Cheating",
        risk: "High",
        message: "Based on your responses, this appears to be a possible case of cheating. Your evidence may help support an investigation.",
        actions: [
          "Keep all messages, emails, and payment receipts.",
          "Report the incident to the nearest police station.",
          "Avoid sending additional money.",
          "Consult a legal professional if necessary."
        ]
      },

      no: {
        result: "Possible Cheating",
        risk: "High",
        message: "You may have been cheated, but collecting evidence will strengthen your complaint.",
        actions: [
          "Gather any available documents or witness information.",
          "Check your bank transaction history.",
          "Report the incident to the police."
        ]
      }
    },

    no: {
      result: "Attempted Cheating",
      risk: "Medium",
      message: "Although you did not suffer a financial loss, someone may have attempted to deceive you.",
      actions: [
        "Do not share personal or banking information.",
        "Block and report the suspicious individual.",
        "Warn others about the scam."
      ]
    }
  },

  no: {
    question: "Did you verify the person's identity before trusting the offer?",

    yes: {
      result: "No Cheating Detected",
      risk: "Low",
      message: "Based on your responses, no cheating appears to have occurred.",
      actions: [
        "Continue verifying offers before making payments.",
        "Keep records of important transactions."
      ]
    },

    no: {
      result: "Potential Fraud Risk",
      risk: "Medium",
      message: "Always verify the identity of individuals before sending money or sharing personal information.",
      actions: [
        "Research unknown sellers or companies.",
        "Avoid making advance payments to strangers.",
        "Use trusted payment methods."
      ]
    }
  }
},
drugOffence: {
  question: "Were illegal drugs found in your possession?",

  yes: {
    question: "Did you know the drugs were in your possession?",

    yes: {
      question: "Was the quantity intended for personal use only?",

      yes: {
        result: "Possible Drug Possession Offence",
        risk: "High",
        message: "Possessing illegal drugs may be a criminal offence. The exact legal consequences depend on the applicable laws and circumstances.",
        actions: [
          "Cooperate with law enforcement.",
          "Do not attempt to destroy or hide evidence.",
          "Consult a qualified legal professional.",
          "Understand your legal rights during the investigation."
        ]
      },

      no: {
        result: "Possible Serious Drug Offence",
        risk: "High",
        message: "Large quantities of illegal drugs may lead to more serious criminal charges depending on the investigation.",
        actions: [
          "Remain cooperative with authorities.",
          "Seek legal representation immediately.",
          "Avoid making false statements during questioning."
        ]
      }
    },

    no: {
      result: "Further Investigation Required",
      risk: "Medium",
      message: "You stated that you were unaware of the drugs. Investigators may examine the surrounding circumstances.",
      actions: [
        "Explain the situation truthfully.",
        "Provide any supporting evidence.",
        "Consult a legal professional if required."
      ]
    }
  },

  no: {
    question: "Did you witness someone using or selling illegal drugs?",

    yes: {
      result: "Possible Drug-Related Activity",
      risk: "Medium",
      message: "If you witness suspected illegal drug activity, reporting it to the appropriate authorities may help prevent crime.",
      actions: [
        "Avoid confronting the individuals.",
        "Report suspicious activity if it is safe to do so.",
        "Do not put yourself at risk."
      ]
    },

    no: {
      result: "No Drug Offence Detected",
      risk: "Low",
      message: "Based on your responses, no drug-related offence appears to be involved.",
      actions: [
        "Continue following the law.",
        "Stay informed about drug-related legal regulations."
      ]
    }
  }
},
hitAndRun: {
  question: "Were you driving the vehicle involved in the accident?",

  yes: {
    question: "Did you stop immediately after the accident?",

    yes: {
      question: "Did you help anyone who was injured and report the accident?",

      yes: {
        result: "Responsible Driver",
        risk: "Low",
        message: "You acted responsibly by stopping, assisting the injured, and reporting the accident to the authorities.",
        actions: [
          "Cooperate with the police investigation.",
          "Exchange insurance and contact details with the other parties.",
          "Keep photographs and accident records for future reference."
        ]
      },

      no: {
        result: "Possible Negligence",
        risk: "Medium",
        message: "Although you stopped, failing to assist injured persons or report the accident may result in legal consequences.",
        actions: [
          "Inform the police as soon as possible.",
          "Seek legal advice if necessary.",
          "Provide complete details of the accident."
        ]
      }
    },

    no: {
      result: "Possible Hit and Run",
      risk: "High",
      message: "Leaving the accident scene without stopping may be considered a serious traffic offence depending on the circumstances.",
      actions: [
        "Contact the nearest police station immediately.",
        "Consult a legal professional.",
        "Do not attempt to hide evidence or avoid investigation."
      ]
    }
  },

  no: {
    question: "Were you injured or was your property damaged in the accident?",

    yes: {
      result: "Accident Victim",
      risk: "Medium",
      message: "You may be entitled to report the accident and seek compensation if applicable.",
      actions: [
        "Report the incident to the police.",
        "Take photographs of the accident scene.",
        "Collect witness information if available.",
        "Seek medical attention if you are injured."
      ]
    },

    no: {
      result: "No Hit and Run Detected",
      risk: "Low",
      message: "Based on your responses, this situation does not appear to involve a hit-and-run incident.",
      actions: [
        "Continue following traffic rules.",
        "Drive carefully and responsibly."
      ]
    }
  }
},
}
export default scenarios;