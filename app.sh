#!/bin/bash
cd /home/codingx/miran/deep-text-recognition-benchmark/ocr-server
$(. /home/ubuntu/anaconda3/bin/activate pytorch_p36)
result = $(python ../demo.py --image_folder ./upload/ --saved_model ../saved_models/TPS-ResNet-BiLSTM-CTC-Seed1111/best_accuracy.pth \
      --Transformation TPS --FeatureExtraction ResNet --SequenceModeling BiLSTM --Prediction CTC)

echo $result