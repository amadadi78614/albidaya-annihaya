import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { propheticTree, getProphetChildren, getProphetLineage, ProphetNode } from '@/data/propheticTree';

interface PropheticTreeProps {
  onProphetSelect?: (prophet: ProphetNode) => void;
}

export default function PropheticTree({ onProphetSelect }: PropheticTreeProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['adam']));
  const [selectedProphetId, setSelectedProphetId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const handleSelectProphet = (prophet: ProphetNode) => {
    setSelectedProphetId(prophet.id);
    onProphetSelect?.(prophet);
  };

  // Get root prophets (those without parents)
  const rootProphets = propheticTree.filter(p => !p.parentId);

  const renderProphetNode = (prophet: ProphetNode, level: number = 0) => {
    const children = getProphetChildren(prophet.id);
    const hasChildren = children.length > 0;
    const isExpanded = expandedIds.has(prophet.id);
    const isSelected = selectedProphetId === prophet.id;

    return (
      <div key={prophet.id} className="mb-2">
        <div
          className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all ${
            isSelected
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-slate-700 hover:bg-slate-600 text-amber-100'
          }`}
          style={{ marginLeft: `${level * 24}px` }}
          onClick={() => handleSelectProphet(prophet)}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(prophet.id);
              }}
              className="flex-shrink-0"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}
          {!hasChildren && <div className="w-4" />}

          <span className="text-xl flex-shrink-0">{prophet.emoji}</span>

          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm">
              {prophet.quranicName}
            </div>
            <div className="text-xs opacity-90">
              {prophet.englishName}
            </div>
          </div>

          <div className="text-xs font-semibold flex-shrink-0">
            {prophet.year > 0 ? `${prophet.year} CE` : `${Math.abs(prophet.year)} BCE`}
          </div>
        </div>

        {isExpanded && hasChildren && (
          <div className="border-l-2 border-amber-600 ml-6">
            {children.map(child => renderProphetNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const selectedProphet = selectedProphetId
    ? propheticTree.find(p => p.id === selectedProphetId)
    : null;

  const selectedLineage = selectedProphet ? getProphetLineage(selectedProphet.id) : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Tree View */}
      <div className="lg:col-span-2 bg-slate-800 rounded-lg p-6 overflow-y-auto max-h-[80vh]">
        <h3 className="text-xl font-bold text-amber-300 mb-4">Prophetic Genealogy</h3>
        <p className="text-amber-100 text-sm mb-6">
          Click on any prophet to view details. Prophets are shown with their Quranic names (Arabic) and English translations.
        </p>

        <div className="space-y-2">
          {rootProphets.map(prophet => renderProphetNode(prophet))}
        </div>
      </div>

      {/* Details Panel */}
      <div className="bg-slate-800 rounded-lg p-6 overflow-y-auto max-h-[80vh]">
        <h3 className="text-xl font-bold text-amber-300 mb-4">Prophet Details</h3>

        {selectedProphet ? (
          <div className="space-y-4">
            {/* Prophet Name */}
            <div>
              <label className="text-amber-200 font-semibold text-sm">Name (Quranic)</label>
              <p className="text-white text-lg font-bold" style={{ fontFamily: 'Amiri, serif' }}>
                {selectedProphet.quranicName}
              </p>
              <p className="text-amber-100 text-sm">{selectedProphet.englishName}</p>
            </div>

            {/* Timeline */}
            <div>
              <label className="text-amber-200 font-semibold text-sm">Timeline</label>
              <p className="text-white">
                {selectedProphet.year > 0
                  ? `${selectedProphet.year} CE`
                  : `${Math.abs(selectedProphet.year)} BCE`}
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="text-amber-200 font-semibold text-sm">Description</label>
              <p className="text-amber-100 text-sm">{selectedProphet.description}</p>
            </div>

            {/* Significance */}
            <div>
              <label className="text-amber-200 font-semibold text-sm">Significance</label>
              <p className="text-amber-100 text-sm">{selectedProphet.significance}</p>
            </div>

            {/* Quranic Mentions */}
            <div>
              <label className="text-amber-200 font-semibold text-sm">Mentioned in Quran</label>
              <p className="text-white font-bold">{selectedProphet.quranicMentions} times</p>
            </div>

            {/* Lineage */}
            {selectedLineage.length > 1 && (
              <div>
                <label className="text-amber-200 font-semibold text-sm">Lineage</label>
                <div className="space-y-1 mt-2">
                  {selectedLineage.map((p, idx) => (
                    <div key={p.id} className="flex items-center gap-2">
                      <span className="text-amber-300">{p.emoji}</span>
                      <span className="text-amber-100 text-sm">
                        {p.quranicName} ({p.englishName})
                      </span>
                      {idx < selectedLineage.length - 1 && (
                        <span className="text-amber-600 ml-auto">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Children */}
            {selectedProphet.childrenIds && selectedProphet.childrenIds.length > 0 && (
              <div>
                <label className="text-amber-200 font-semibold text-sm">Children (Prophets)</label>
                <div className="space-y-1 mt-2">
                  {getProphetChildren(selectedProphet.id).map(child => (
                    <button
                      key={child.id}
                      onClick={() => handleSelectProphet(child)}
                      className="block w-full text-left p-2 rounded bg-slate-700 hover:bg-amber-600 text-amber-100 hover:text-white text-sm transition-colors"
                    >
                      <span className="mr-2">{child.emoji}</span>
                      {child.quranicName} ({child.englishName})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-amber-200 mb-2">Select a prophet to view details</p>
            <p className="text-amber-100 text-sm">Click on any name in the tree</p>
          </div>
        )}
      </div>
    </div>
  );
}
