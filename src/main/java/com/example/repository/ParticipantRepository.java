package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.Participant;

public interface ParticipantRepository extends JpaRepository<Participant, Long> {
	
}
