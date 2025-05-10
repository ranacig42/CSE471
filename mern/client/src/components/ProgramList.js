import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProgramList.css';

const ProgramList = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    country: '',
    field: '',
    tuitionRange: [0, 100000],
    scholarshipOnly: false,
    sortBy: 'default',
  });

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get('http://localhost:1060/api/programs');
        setPrograms(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching programs:', err);
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const isExpired = (deadline) => new Date(deadline) < new Date();

  const applyFilters = (programs) => {
    return programs
      .filter(p => {
        const countryMatch = !filters.country || 
          (p.country && p.country.toLowerCase().includes(filters.country.toLowerCase()));
        const fieldMatch = !filters.field || 
          (p.field && p.field.toLowerCase().includes(filters.field.toLowerCase()));
        const scholarshipMatch = !filters.scholarshipOnly || p.scholarship;
        const tuitionMatch = (p.tuition || 0) >= filters.tuitionRange[0] && 
                             (p.tuition || 0) <= filters.tuitionRange[1];
        
        return countryMatch && fieldMatch && scholarshipMatch && tuitionMatch;
      })
      .sort((a, b) => {
        const aExpired = isExpired(a.applicationDeadline);
        const bExpired = isExpired(b.applicationDeadline);

        if (aExpired && !bExpired) return 1;
        if (!aExpired && bExpired) return -1;
        if (aExpired && bExpired) return 0;

        const aHigh = a.priorityType === 'High';
        const bHigh = b.priorityType === 'High';
        
        if (aHigh && !bHigh) return -1;
        if (!aHigh && bHigh) return 1;

        if (filters.sortBy === 'deadline') {
          return new Date(a.applicationDeadline) - new Date(b.applicationDeadline);
        }

        return 0;
      });
  };

  const filteredPrograms = applyFilters(programs);

  const getProgramCardClass = (program) => {
    const expired = isExpired(program.applicationDeadline);
    const isHighPriority = program.priorityType === 'High';

    let cardClass = 'program-card shadow-sm rounded-4 p-4';
    if (expired) {
      cardClass += ' expired';
    } else if (isHighPriority) {
      cardClass += ' high-priority';
    }

    return cardClass;
  };

  if (loading) return <p className="text-center mt-5">Loading programs...</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">Postgraduate Programs</h2>

      {/* Filter Bar */}
      <div className="card p-3 shadow-sm mb-4 d-flex flex-wrap flex-row gap-3 justify-content-center align-items-end">
        <div className="d-flex flex-column">
          <label className="form-label">Country</label>
          <input 
            className="form-control" 
            value={filters.country}
            onChange={e => setFilters({ ...filters, country: e.target.value })} 
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label">Field of Study</label>
          <input 
            className="form-control" 
            value={filters.field}
            onChange={e => setFilters({ ...filters, field: e.target.value })} 
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label">Tuition Range</label>
          <div className="d-flex gap-2">
            <input 
              type="number" 
              className="form-control" 
              placeholder="Min" 
              value={filters.tuitionRange[0]}
              onChange={e => setFilters({ ...filters, tuitionRange: [Number(e.target.value), filters.tuitionRange[1]] })} 
            />
            <input 
              type="number" 
              className="form-control" 
              placeholder="Max" 
              value={filters.tuitionRange[1]}
              onChange={e => setFilters({ ...filters, tuitionRange: [filters.tuitionRange[0], Number(e.target.value)] })} 
            />
          </div>
        </div>

        <div className="form-check mt-4">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="scholarshipOnly" 
            checked={filters.scholarshipOnly}
            onChange={e => setFilters({ ...filters, scholarshipOnly: e.target.checked })} 
          />
          <label className="form-check-label" htmlFor="scholarshipOnly">Scholarship Only</label>
        </div>

        <div className="d-flex flex-column">
          <label className="form-label">Sort By</label>
          <select 
            className="form-select" 
            value={filters.sortBy}
            onChange={e => setFilters({ ...filters, sortBy: e.target.value })}
          >
            <option value="default">Default</option>
            <option value="deadline">Application Deadline</option>
          </select>
        </div>
      </div>

      {/* Program List */}
      <div className="col-md-12">
        {filteredPrograms.length === 0 ? (
          <p>No programs match the selected criteria.</p>
        ) : (
          <div className="row g-4">
            {filteredPrograms.map((program) => (
              <div className="col-md-6" key={program._id}>
                <div className={getProgramCardClass(program)}>
                  <h5 className="fw-semibold">{program.name}</h5>
                  <p className="text-muted small mb-1">
                    <strong>Field:</strong> <span className="badge bg-secondary">{program.field}</span>
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>Delivery:</strong> <span className="badge bg-info text-dark">{program.deliveryType}</span>
                  </p>
                  <p>{program.description}</p>
                  <ul className="list-group list-group-flush small">
                    <li className="list-group-item"><strong>Duration:</strong> {program.duration}</li>
                    <li className="list-group-item"><strong>Requirements:</strong> {program.admissionRequirements}</li>
                    <li className="list-group-item"><strong>Deadline:</strong> {new Date(program.applicationDeadline).toLocaleDateString()}</li>
                    <li className="list-group-item"><strong>Starts:</strong> {new Date(program.programStartDate).toLocaleDateString()}</li>
                    <li className="list-group-item"><strong>Tuition:</strong> ${program.tuition || 'Not specified'}</li>
                    <li className="list-group-item"><strong>Scholarship:</strong> {program.scholarship ? 'Yes' : 'No'}</li>
                    <li className="list-group-item"><strong>Country:</strong> {program.country || 'Unknown'}</li>
                    <li className="list-group-item"><strong>Priority:</strong> {program.priorityType || 'Normal'}</li>
                  </ul>
                  <div className="mt-3 text-end">
                    <button 
                      className="btn btn-primary apply-btn"
                      disabled={isExpired(program.applicationDeadline)}
                      onClick={() => window.location.href = '#'}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramList;
