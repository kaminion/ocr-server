#!/bin/bash
source /home/ubuntu/anaconda3/bin/activate pytorch_p36
cd /home/codingx/miran/deep-text-recognition-benchmark/ocr-server
result = $(python ../demo.py --image_folder ./upload/ --save_model ../save_models/TPS-ResNet-BiLSTM-CTC-Seed1111/best_accuracy.pth \
      --Transformation TPS --FeatureExtraction ResNet --SequenceModeling BiLSTM --Prediction CTC)

echo $result