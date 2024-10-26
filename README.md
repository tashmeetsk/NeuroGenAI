# NeuroGenAI

A brain disease classification tool using CNN to analyze MRI images, combined with patient history via NLP and LLMs, to provide personalized treatment recommendations. The project aims to assist healthcare professionals with early diagnosis and tailored care plans.

## Getting Started

Follow the steps below to get the application up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- Python 3.8 or higher
- TensorFlow/Keras
- NumPy, Pandas
- Jupyter Notebook (optional, for testing and prototyping)

You can install the necessary Python packages by running:

```
pip install -r requirements.txt
```

### Installing

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tashmeetsk/neurogenai.git
   cd neurogenai
   ```

2. **Prepare Data**:
   - Download MRI datasets for brain diseases (glioma, meningioma, pituitary tumor, stroke, Alzheimer’s, etc.).
   - Organize the data into separate folders for training and validation.
   - Ensure images are preprocessed to the same format and shape.


## Features

- **Multi-Disease Classifier**: A CNN-based classifier that detects multiple brain diseases, including tumors, strokes, and Alzheimer's Disease.
- **Custom Routing Layer**: A custom Keras layer that routes predictions to specialized models for further classification of tumors, strokes, or Alzheimer's subtypes.
- **Integration with LLM**: Leverages patient history and NLP for personalized treatment suggestions.
- **Modular Architecture**: Easily extendable to add new diseases and treatment plans.

## References
.....

## Built With

- **TensorFlow** - Deep learning framework used for building CNN models.
- **Keras** - High-level neural network API.
- **Python** - Backend programming language.
- **Flask** - Used to serve the models as a web API.

## Data

...

## Contribution

To contribute:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

We welcome new ideas, improvements, or bug fixes!

## Authors
...
