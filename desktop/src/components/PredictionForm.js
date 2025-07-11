import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import { mockFighters } from '../data/mockData';
import './PredictionForm.css';

const PredictionForm = ({ fight, onSubmit, existingPrediction = null }) => {
  const [prediction, setPrediction] = useState({
    winner: existingPrediction?.winner || '',
    method: existingPrediction?.method || '',
    round: existingPrediction?.round || '',
    confidence: existingPrediction?.confidence || 50
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const getFighterById = (id) => mockFighters.find(f => f.id === id);
  const fighter1 = getFighterById(fight?.fighter1);
  const fighter2 = getFighterById(fight?.fighter2);

  const methods = ['KO/TKO', 'Submission', 'Decision', 'Disqualification'];
  const rounds = [1, 2, 3, 4, 5];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prediction.winner || !prediction.method || !prediction.round) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({
        ...prediction,
        fightId: fight.id,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Failed to submit prediction:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = prediction.winner && prediction.method && prediction.round;

  if (!fight || !fighter1 || !fighter2) {
    return <div>Fight information not available</div>;
  }

  return (
    <Card className="prediction-form-card" variant="primary">
      <div className="prediction-header">
        <h3>Make Your Prediction</h3>
        <div className="fight-info">
          <span className="fighter-name">{fighter1.name}</span>
          <span className="vs">VS</span>
          <span className="fighter-name">{fighter2.name}</span>
        </div>
        <div className="fight-details">
          {fight.title} • {fight.weightClass}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="prediction-form">
        <div className="form-group">
          <label className="form-label">Who will win?</label>
          <div className="fighter-options">
            <label className={`fighter-option ${prediction.winner === fight.fighter1 ? 'selected' : ''}`}>
              <input
                type="radio"
                name="winner"
                value={fight.fighter1}
                checked={prediction.winner === fight.fighter1}
                onChange={(e) => setPrediction(prev => ({ ...prev, winner: e.target.value }))}
              />
              <div className="fighter-option-content">
                <img src={fighter1.image} alt={fighter1.name} className="fighter-avatar" />
                <div>
                  <div className="fighter-name">{fighter1.name}</div>
                  <div className="fighter-record">{fighter1.record.wins}-{fighter1.record.losses}</div>
                </div>
              </div>
            </label>
            <label className={`fighter-option ${prediction.winner === fight.fighter2 ? 'selected' : ''}`}>
              <input
                type="radio"
                name="winner"
                value={fight.fighter2}
                checked={prediction.winner === fight.fighter2}
                onChange={(e) => setPrediction(prev => ({ ...prev, winner: e.target.value }))}
              />
              <div className="fighter-option-content">
                <img src={fighter2.image} alt={fighter2.name} className="fighter-avatar" />
                <div>
                  <div className="fighter-name">{fighter2.name}</div>
                  <div className="fighter-record">{fighter2.record.wins}-{fighter2.record.losses}</div>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="method">Win Method</label>
            <select
              id="method"
              value={prediction.method}
              onChange={(e) => setPrediction(prev => ({ ...prev, method: e.target.value }))}
              className="form-select"
            >
              <option value="">Select method</option>
              {methods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="round">Round</label>
            <select
              id="round"
              value={prediction.round}
              onChange={(e) => setPrediction(prev => ({ ...prev, round: parseInt(e.target.value) }))}
              className="form-select"
            >
              <option value="">Select round</option>
              {rounds.map(round => (
                <option key={round} value={round}>Round {round}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="confidence">
            Confidence: {prediction.confidence}%
          </label>
          <input
            type="range"
            id="confidence"
            min="0"
            max="100"
            value={prediction.confidence}
            onChange={(e) => setPrediction(prev => ({ ...prev, confidence: parseInt(e.target.value) }))}
            className="confidence-slider"
          />
          <div className="confidence-labels">
            <span>Not Sure</span>
            <span>Very Confident</span>
          </div>
        </div>

        <div className="form-actions">
          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={!isFormValid || isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? 'Submitting...' : existingPrediction ? 'Update Prediction' : 'Submit Prediction'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default PredictionForm; 